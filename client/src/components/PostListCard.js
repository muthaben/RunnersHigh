import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function PostListCard () {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='postcard_container'>
      <Card sx={{ minWidth: 500, maxWidth: 500 }}>
        <Link to='/detail'>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='your image'>
                R
              </Avatar>
        }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
        }
            title='러닝메이트 모집 '
            subheader='September 14, 2016'
          />
        </Link>
        <Link to='/detail'>
          <CardMedia
            component='img'
            height='194'
            image='circle-scatter-haikei.png'
            alt='Your image'
          />
        </Link>
        <CardContent>
          <Typography variant='body2 h1' color='text.secondary' style={{ fontWeight: 900, fontSize: 20 }}>
            서울 양재동에서 달릴사람 모집합니다.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>러닝멤버 모집합니다.</Typography>
            <Typography paragraph>
              서울시 양재동 우성아파트 앞 양재천에서 달릴사람 구합니다.
            </Typography>
            <Typography paragraph>
              멤버는 10명이 되면 종료 하겠습니다.
            </Typography>
            <div>
              지도를 넣어주죠
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}
