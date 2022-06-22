import React, { useState, useEffect, useRef } from 'react'
import useInPuts from './useInPuts'
const Info = () => {
  const [state, onChange] = useInPuts({
    name: '',
    nickname: ''
  })
  const { name, nickname } = state
  // const [name, setName] = useState('')
  // const [nickname, setNickname] = useState('')
  // useEffect(()=>{
  //   console.log("render is complete! - useEffect")
  //   console.log(name)

  //   return() => {
  //     console.log('clean up')
  //     console.log(name)
  //   }
  // },)
  // const onChangeName = e => {
  //   setName(e.target.value)
  // }

  // const onChangeNickname = e => {
  //   setNickname(e.target.value)
  // }
  // const nameInput = useRef()
  // const onReset = () => {
  //   setName('')
  //   setNickname('')
  //   //input에 포커스 추가
  //   nameInput.current.focus()
  // }
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} ></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>

      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
        {/* <button onClick={onReset}>초기화</button> */}
      </div>
    </div>
  )
}


export default Info