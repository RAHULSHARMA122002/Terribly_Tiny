
import CheckIcon from '@mui/icons-material/Check';
import bg from '../images/bg.jpg'
import pf from '../images/profile.jpg'
import './profle.css'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';

export const Profile = ()=>{
    const profiledata = [{
        name:"Rahul Sharma",
        followers:"255",
        following:"300",
        title:"Student",
        firstPost:"hellloguys",
    }
     ]
    return(<div className="profile">
        
          <div className="images">
          <img src={bg} alt="stylesheet" className='cover'/>
          <div className='profilecontainer'>
            <div className="profileImg">
                <img src={pf} alt="stylesheet" className='profilepic' />
            </div>
            <div className='uInfo'>
                <div className="left">
                    <div className="items">
                        <InstagramIcon/>

                    </div>
                    <div className="items">
                    <FacebookIcon/>
                    </div>
                    <div className="items">
                    <TwitterIcon/>
                    </div>

                </div>
            <div className='center'>
                    <div className='name'>
                    {profiledata[0].name}
                    <DiamondOutlinedIcon className='dia'/>
                    <CheckIcon className='check'/>
                    </div>
                    
                    <div className="follow">
                    <div className='follower'>
                        {profiledata[0].followers}
                        <br/>
                        <span>Followers</span>
                    </div>
                    <div className='following'>
                        {profiledata[0].following}
                        <br/>
                        <span>Following</span>
                    </div>

                    </div>
                    <div className='mainit'>
                    <div className="item">
                    <StarBorderIcon className="star"/>
                    <span>125</span>
                    </div>
                   <div className="item">
                   <ThumbUpOffAltIcon className='like'/>
                   <span>12</span>
                   </div>
                   <div className='item'>
                   <RemoveRedEyeIcon className='eye'/>
                   <span>57.8k</span>
                   </div>
                   <div className="item">
                   <FavoriteBorderIcon className='fav'/>
                   <span>26.08k</span>
                   </div>
                   
                    </div>
                    
                </div>

                <div className='right'>
                    <div className="title">
                        <span>Position :</span>
                        <span><SchoolIcon/></span>
                    {profiledata[0].title}
                    </div>
                  
                    
                    
                    
                    
                 
                </div>
               

            </div>
            
          </div>
          </div>
           
        <div className='postcont'>
        <div className="post1">
         <div className='textt'>
            <div className='fon'>   <span className='headd'>Changing the world</span> <span><ThumbUpOffAltIcon  className='like'/></span></div>
          
            <p>
            The world changing at a feverish pace Friends colleagues and everyone engaged in knowledge work are beginning to sense this, including
            </p>
         </div>
         <div className='side'> 
            <span className='bluu'>musing</span> by rahul <span>Augest-2 -2min read</span>
         </div>
         </div>
        <div className="post1">
        <div className='textt'>
            <div  className='fon'>
            <spna className='headd'>India VS Austraila</spna> <span><ThumbUpOffAltIcon  className='like'/></span>
            </div>
          
            <p>
            The world changing at a feverish pace Friends colleagues and everyone engaged in knowledge work are beginning to sense this, including
            </p>
          

         </div>
         <div className='side'>
         <span className='bluu'>musing</span> by rahul <span>Augest-2 -2min read</span>  
        </div>
        </div>
         
         <div className="post1">
         <div className='textt'>
            <div  className='fon'> <span className='headd'>Write to bulid</span> <span><ThumbUpOffAltIcon  className='like'/></span></div>
           
            <p>
                Wrte the steps to create
                <ul>
                   <li>
                   STORIES
                    </li> 
                    <li>
                    product
                    </li>
                    <li>
                    company 
                    </li>
                </ul>
               
                
            </p>
            
            
         </div>
         <div className='side'>
         <span className='bluu'>musing</span> by rahul <span>Augest-2 -2min read</span>  
        </div>
         </div>

        </div> 
        
        

    </div>)
    }

    export default Profile;