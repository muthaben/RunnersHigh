import '../stylesheet/CreatePost.css'
import React , {useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Map from '../components/Map'
import {setPost} from '../redux/action'
import DaumAdress from '../components/DaumAdress'
const {kakao} = window
function CreatePost ({match}) {
  const [getSerch , getSetSerch] =useState(false)
  const [getTitle ,getSetTitle ] = useState('')
  const [getFile ,getSetFile ] = useState('')
  const [getText , getSetText] = useState('')
  const [getLocation , getSetLocation] = useState('')
  const [getLatitude , getSetLatitude] = useState(null)
  const [getLongitude , getSetLongitude] = useState(null)
  const [getDetailAdress , getSetDetailAdress] = useState('')

  const serchAdress = (a) => {
    getSetDetailAdress(a)
  }
  const onTitleHandle = (e) => {
    getSetTitle(e.target.value)
  }
  const onTextHandle = (e) => {
    getSetText(e.target.value)
  }
const onFileHandle = (e) => {
  getSetFile(e.target.files[0])
}

const onSerchAdressHandle = () => {
  getSetSerch(true)
}
useEffect(() => {
  const geocoder = new kakao.maps.services.Geocoder();

  if (getDetailAdress === '') {
    return;
  }
  geocoder.addressSearch(getDetailAdress, function (results, status) {
    if (status === kakao.maps.services.Status.OK) {
      const result = results[0];
      getSetLatitude(Number(result.y));
      getSetLongitude(Number(result.x));
    }
  });
}, [getDetailAdress]);




  return (
    <div className='create_container'>
      <form className='create_form'>
        <div className='create_title'>
          <span>제목</span>
          <input type='text' placeholder='제목을 입력하세요' onChange={onTitleHandle} />
        </div>
        <div className='create_checkbox'>
          <span>썸넬</span>
          <input type='file' 
                 accept='img/*' 
                 name='file' 
                 onClick={onFileHandle}
          />
          <span>이미지선택</span>
          <input type='checkbox' />
          <span>기본이미지</span>
        </div>
        <div className='create_main_text'>
          <span>본문</span>
          <textarea placeholder='본문을 입력하세요' onChange={onTextHandle} />
        </div>
        <div className='create_map'>
        <span>코스</span>
        {getDetailAdress ? `${getDetailAdress}` : '장소검색'}
        <button
          className='create_main_servh_btn'
          value='주소 검색'
          onClick={onSerchAdressHandle}
          >장소선택
          <DaumAdress  serchAdress={serchAdress} />
          </button>
          <Map  getLatitude={getLatitude} getLongitude={getLongitude}/>
        </div>
        <button className='create_button' >게시글 작성</button>
       
      </form>
    
    </div>
  )
}

export default withRouter(CreatePost)
