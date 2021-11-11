import React from 'react'
import DaumPostcode from 'react-daum-postcode'
function DaumAdress ({ searchAddress, onClosesearchHandle }) {
  const handleComplete = (data) => {
    // let fullAddress = data.address
    // let extraAddress = ''

    // if (data.addressType === 'R') {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName)
    //   }
    //   fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '')
    // }

    // console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    searchAddress(data.address)
    onClosesearchHandle(`${data.sido} ${data.sigungu} ${data.bname}`)
    // onCloseSerchHandle()
  }
  // const postCodeStyle = {

  //   display: "block",
  //   position: "absolute",
  //   top: "20%",
  //   width: "800px",
  //   height: "800px",
  //   padding: "7px",
  //   zIndex: 100,
  // };

  return (
    <div className='address_search'>
      <i className='fas fa-times' onClick={onClosesearchHandle} />
      <DaumPostcode
        className='daumPostCode'
        onComplete={handleComplete}
        autoClose={false}
        animation
        style={{ width: '90vw', height: '60vh', maxWidth: '425px' }}
      />
    </div>
  )
}

export default DaumAdress
