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
  const [isAddressBtnClick, setIsAddressBtnClick] = useState(0)

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
    getSetFileImage(e.target.files)
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

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', getTitle)
    formData.append('text', getText)
    formData.append('latitude', getLatitude)
    formData.append('longitude', getLongitude)
    formData.append('thumbnail_url', getFileImage)
    formData.append('location', getDetailAddress)

    for (const key of formData.keys()) {
      console.log(key)
    }
    for (const value of formData.values()) {
      console.log(value)
    }
    // dispatch(setPost(formData))
    await axios.post('http://localhost:80/posts', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
        'Content-Type': 'multipart/form-data'
      // 'withcredentials': true
      }
    })
      .then((data) => {
        console.log(data.data.data)
        history.push('/main')
        dispatch(setPost(data.data.data))
      })
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
            <input
              type='file'
              accept='img/*'
              name='fileImage'
              onChange={onFileImageHandle}
            />
            <span>이미지선택</span>
            <input type='checkbox' />
            <span>기본이미지</span>
          </div>
          <div className='create_main_text'>
            <span>본문</span>
            <textarea placeholder='본문을 입력하세요' name='text' value={getText} onChange={onTextHandle} />
          </div>
          <div className='create_map'>
            <span>코스</span>
            <div className={getSearch ? 'search_on' : 'search_off'}>
              <DaumAddress searchAddress={searchAddress} onClosesearchHandle={onClosesearchHandle} />
            </div>
            {getDetailAddress ? `${getDetailAddress}` : null}
            <button
              type='button'
              className='create_main_search_btn'
              value='주소 검색'
              onClick={onsearchAddressHandle}
            >장소선택
            </button>
            {getLongitude && getLatitude
              ? (
                <Map getLatitude={getLatitude} getLongitude={getLongitude} />
                )
              : null}
          </div>
          <button className='create_button' onClick={onSubmitHandle}>게시글 작성</button>

        </form>

      </div>
    </>
  )
}

export default withRouter(CreatePost)
