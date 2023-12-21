import React, { useEffect, useState } from 'react'
import privateAxios from '../../config/privateAxios';
import axios from 'axios';
import { errors, success } from "../../until/notication"

export default function Todo() {
  const [newTodo, setNewTodo] = useState({
    nameTodo:""
  });
  const [listTodo, setListTodo] = useState([]);
  const [flag,setFlag]= useState(true)
  const [edit,setEdit]= useState(true)
  // const [user,setUser] = useState(a)

  let a =JSON.parse(localStorage.getItem("user"))
  console.log(a);

  // lấy dữ liệu công việc về
  const handleData = async () => {
    try {
      const res = await axios.get("http://localhost:6600/api/v1/listtodo")
      setListTodo(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleData()
  }, [flag])
  // console.log(listTodo);
  // thêm todo đã có phân quyền
  const addTodo = async () => {
    if(newTodo.todoName == ""){
      errors("bạn không đc để trống")
    }else{

      try {
        const res = await privateAxios.post(`/api/v1/addtodo`, newTodo)
  
        success(res.data.message);
        setFlag(!flag)
      } catch (error) {
        errors(error.response.data.message);
      }
      setNewTodo({todoName : ""})
    }
    }
  // xoá
  const handleDelete = async (id) => {
    try {
      const res = await privateAxios.delete(`http://localhost:6600/xoa/${id}`)
      success(res.data.message);
      setFlag(!flag)
    } catch (error) {
      errors(error.response.data.message);
    }
  }
  // sửa
  const handleEdit = async (item) => {
    setNewTodo(item);
    setEdit(false)
  }
  
  const handleUpdate = async () => {
    try {
      const res = await privateAxios.put(`http://localhost:6600/update/${newTodo.id}`,newTodo)
      success(res.data.message);
      setNewTodo("")
      setFlag(!flag)
      setEdit(true)
    } catch (error) {
      errors(error.response.data.message);
    }
    setNewTodo({todoName : ""})
  }
  return (
    <div className='grid place-content-center  bg-yellow-500 h-[700px]'>
      <div className='mb-56 bg-white rounded p-5 '>
        <div className='text-3xl font-medium p-5 ml-5'>
          <h1>danh sach công việc</h1>
          </div>
          {a.role == 1 ? <p>ADMIN</p> : <p>người dùng</p>}
        <div>
          <input
            className='border-lime-600 border w-[356px] h-[36px] px-5 text-sm text-gray-900 rounded-lg bg-gray-50'
            onChange={(e) => setNewTodo({ ...newTodo, [e.target.name]: e.target.value })}
            type='text'
            name='todoName'
            value={newTodo.todoName}
            placeholder='thêm công việc'></input>

            {edit ? <button
              className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2 ml-1 text-center me-2 mb-2'
              onClick={addTodo}
            >thêm</button> :
            <button
            className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2 ml-1 text-center me-2 mb-2'
            onClick={handleUpdate}
            >Cập nhật</button>
          }
          
        </div>
        <div>
          <ul className='max-w-md divide-y divide-gray-200 p-2 '>
            {listTodo.map((item, index) => {
              return <li
                className='pb-3 sm:pb-4'
                key={index}>
                <div className='flex '>
                  <div className=''>{item.todoName}</div>
                  <div 
                  className='  text-base ml-80'>
                    <button onClick={()=>handleDelete(item.id)}>xoá</button>
                    <button onClick={()=>handleEdit(item)}>sửa</button>
                  </div>
                </div>

              </li>

            })}
          </ul>
        </div>
      </div>

    </div>
  )
}
