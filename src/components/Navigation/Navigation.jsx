import navimg from '../images/navimg.jpg'
import './navigation.css'

export const Navigation = ()=>{
return(<div className="navigation">

       
        <div className='img'>
        <img src={navimg} alt="stylesheet" className='imagee'/>
        <span className='spann'>STORIES</span>
        </div>
        
       
     
       
      

         <button>Course</button>
</div>)
}

export default Navigation;