import '../App.css';
import { Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
function WelcomePage() {
  const navigate = useNavigate();

  return (
      <>
          <div className="flex justify-center">
              <Fab className='mt-5' variant="extended" size="large" color="primary" onClick={() => navigate("/create-order-page")}>
                  <AddIcon sx={{ mr: 1 }} />
                  Tạo Đơn Hàng
              </Fab>
          </div>
      </>
  )
}

export default WelcomePage;