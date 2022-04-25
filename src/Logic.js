import React, { useState, useRef, useEffect } from "react";
import Render from "./Render";
import { useForm } from "react-hook-form";
import { getAllUser, updateUser, addUser, deleteUser } from "./API/api.service";

function Logic() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm();
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  // fetch All uers
  const fetchAllUser = async () => {
    const userList = await getAllUser();
    setUsers(userList.data);
  };

  // Call API get users
  useEffect(() => {
    fetchAllUser();

    // const fetchUsers = async () => {
    //   try {
    //     const userList = await axios.get("http://localhost:8000/v1/user");
    //     setUsers(userList.data);

    //     // console.log(userList.data);
    //     console.log("get all successfully");
    //   } catch (error) {
    //     console.log("get fail", error);
    //   }
    // };

    // fetchUsers();
  }, []);

  // Dialog delete
  const [showDialog, setShowDialog] = useState({
    message: "",
    isLoading: false,
  });

  const userDialog = useRef();
  const handleDialog = (message, isLoading) => {
    setShowDialog({
      message,
      isLoading,
    });
    setCurrentPage(1);
  };

  // const areUseSureDelete = (choose) => {

  //     if(choose) {

  //         setUsers(users.filter(item => item !== userDialog.current))
  //         handleDialog('', false)
  //     }
  //     else {
  //         handleDialog('', false)
  //     }
  // }

  // Get users current
  const areUseSureDelete = async (choose) => {
    // userDialog.current._id

    if (choose) {
      const dataDelete = await deleteUser(userDialog);
      if (dataDelete.status === 200) {
        fetchAllUser();
        handleDialog("", false);
        console.log("delete successfully");
      }
    } else {
      handleDialog("", false);
    }
  };

  const indexOfLastUsers = currentPage * itemsPerPage;
  const indexOfFirstUsers = indexOfLastUsers - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);
  const thuTu = useRef(0);

  //Hanlde Delete
  const handleDelete = (user) => {
    handleDialog("Are you sure delete this user?", true);
    userDialog.current = user;
  };

  //Handle Edit
  const handleEdit = (user, index) => {
    reset(
      {
        fullName: user.fullName,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        school: user.school,
        className: user.className,
        email: user.email,
      },
      {
        keepErrors: false,
      }
    );
    setShow(false);
    // thuTu.current = index;

    thuTu.current = user._id;
  };

  // Handle Save
  const handleSave = async (data) => {
    setFocus("fullName");
    if (show === false) {
      await updateUser(thuTu, data);

      // const dataUpdate = await axios.put(
      //   `http://localhost:8000/v1/user/${thuTu.current}`,
      //   data
      // );

      // users.splice(thuTu.current, 1, data);
      // setUsers([...users]);

      setShow(true);
    } else {
      await addUser(data);

      // const dataSave = await axios.post("http://localhost:8000/v1/user/", data);
      // setUsers((prev) => [...prev, data]);
    }
    fetchAllUser();

    // const userList = await axios.get("http://localhost:8000/v1/user");
    // setUsers(userList.data);

    reset({
      fullName: "",
      firstName: "",
      lastName: "",
      age: "",
      school: "",
      className: "",
      email: "",
    });
  };

  // Handle Cancel
  const handleCancel = () => {
    thuTu.current = 0;

    reset(
      {
        fullName: "",
        firstName: "",
        lastName: "",
        age: "",
        school: "",
        className: "",
        email: "",
      },
      {
        keepErrors: false,
      }
    );

    setShow(true);
  };

  //   Handle click pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <Render
        users={currentUsers}
        show={show}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleCancel={handleCancel}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        paginate={paginate}
        currentPage={currentPage}
        showDialog={showDialog}
        areUseSureDelete={areUseSureDelete}
      />
    </React.Fragment>
  );
}

export default Logic;
