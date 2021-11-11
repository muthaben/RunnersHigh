import '../stylesheet/CreatePost.css'
import React, { useState, useEffect, history } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Map from '../components/Map'
import { setPost } from '../redux/action'
import DaumAddress from '../components/DaumAddress'
const { kakao } = window
function CreatePost ({ match, history, post }) {
  const dispatch = useDispatch()
  const [getSearch, getSetsearch] = useState(false)
  const [getTitle, getSetTitle] = useState('')
  const [getFileImage, getSetFileImage] = useState('')
  const [getText, getSetText] = useState('')
  const [getLocation, getSetLocation] = useState('')
  const [getLatitude, getSetLatitude] = useState(null)
  const [getLongitude, getSetLongitude] = useState(null)
  const [getDetailAddress, getSetDetailAddress] = useState('')

  const searchAddress = (a) => {
    getSetDetailAddress(a)
  }
  const onTitleHandle = (e) => {
    getSetTitle(e.target.value)
  }
  const onTextHandle = (e) => {
    getSetText(e.target.value)
  }
  const onFileImageHandle = (e) => {
    getSetFileImage(e.target.files[0])
  }

  const onsearchAddressHandle = () => {
    getSetsearch(true)
  }
  const onClosesearchHandle = () => {
    getSetsearch(false)
  }
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder()

    if (getDetailAddress === '') {
      return
    }
    geocoder.addressSearch(getDetailAddress, function (results, status) {
      if (status === kakao.maps.services.Status.OK) {
        const result = results[0]
        getSetLatitude(Number(result.y))
        getSetLongitude(Number(result.x))
      }
    })
  }, [getDetailAddress])

  const onSubmitHandle = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', getTitle)
    formData.append('text', getText)
    formData.append('latitude', getLatitude)
    formData.append('longitude', getLongitude)
    formData.append('postimage', getFileImage)
    formData.append('location', getDetailAddress)

    for (const key of formData.keys()) {
      console.log(key)
    }
    for (const value of formData.values()) {
      console.log(value)
    }

    if (
      getTitle === '' || getText === ''
    ) {
      alert('본문을 입력하세요 .')
    } else if (getDetailAddress === '') {
      alert('장소를 선택하세요.')
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/posts`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((data) => {
          console.log(data.data.data)
          history.push('/main')
          dispatch(setPost(data.data.data))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  // console.log(getFileImage)
  return (
    <>

      <div className='create_container'>

        <form className='create_form'>
          <div className='create_title'>
            <span>제목</span>
            <input type='text' name='title' placeholder='제목을 입력하세요' value={getTitle} onChange={onTitleHandle} />
          </div>
          <div className='create_checkbox'>
            <span>썸넬</span>
            <label className='input_button' for='input_file'>
              업로드<span></span>
            </label>
            <input
              id='input_file'
              type='file'
              accept='img/*'
              name='postimage'
              onChange={onFileImageHandle}
              style={{display:'none'}}
            />
            {/* <span>이미지선택</span>
            <input type='checkbox' />
            <span>기본이미지</span> */}
          </div>
          <div className='create_main_text'>
            <span>본문</span>
            <textarea placeholder='본문을 입력하세요' name='text' value={getText} onChange={onTextHandle} />
          </div>
          <div className='create_map'>
            <span>장소</span>
            <div className={getSearch ? 'search_on' : 'search_on off'}>
              <DaumAddress searchAddress={searchAddress} onClosesearchHandle={onClosesearchHandle} />
            </div>
            <div className='create_serch_container'>
            <div
              type='button'
              className='create_main_search_btn'
              value='주소 검색'
              onClick={onsearchAddressHandle}
            >만남장소 선택
            </div>
            <div className='getDetail_adress'>{getDetailAddress ? `${getDetailAddress}` : null}</div>
            </div>
            {getLongitude && getLatitude
              ? (
                <Map getLatitude={getLatitude} getLongitude={getLongitude} />
                )
              : null}
          </div>
          <div className='create_button_container'>
          <div className='create_button' onClick={onSubmitHandle}>게시글 작성</div>
          </div>
        </form>
      </div>
    </>
  )
}

export default withRouter(CreatePost)
