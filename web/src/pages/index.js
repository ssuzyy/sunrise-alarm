import { useSelector, useDispatch } from 'react-redux'
import { setColor, setBrightness } from 'store/actions/alarm'

export default function Home() {

  const color = useSelector(state => state.alarm.color)
  const brightness = useSelector(state => state.alarm.brightness)

  const dispatch = useDispatch()

  return (
    <>
      <h1>hiiiii :3</h1>
      
      <p>Color: {color}</p>
      <p>Brightness: {brightness}</p>
      
      <button onClick={() => dispatch(setColor('#ff0000'))}>
        Set Color (Red)
      </button>

      <button onClick={() => dispatch(setColor('#ffffff'))}>
        Set Color (White)
      </button>
      
      <button onClick={() => dispatch(setBrightness(75))}>
        Set Brightness (75%)
      </button>

      <button onClick={() => dispatch(setBrightness(50))}>
        Set Brightness (50%)
      </button>
      
      <p>Refresh the page and the values should persist ! godwilling ...</p>
    </>
  );
}
