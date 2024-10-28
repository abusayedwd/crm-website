import { CheckCircleOutlined } from '@ant-design/icons';
import benner from '@/../../public/image/benner.png'


export default function Benner() {
    return(
        <div>
            <div className="relative bg-gray-900 text-white h-[900px] flex items-center">
      {/* Background Image */}
    

      <div className="absolute inset-0 bg-cover bg-center opacity-60"  style={{ 
        // backgroundImage: `url(${benner.src})`, 
        backgroundImage: `url(${benner.src})`,
            backgroundSize: 'cover',         
            backgroundPosition: 'center',  
            backgroundRepeat: 'no-repeat', 
            boxSizing: 'border-box', 
            
           
        }} />

      {/* Overlay Content */}
      <div className="  z-10  container mx-auto  flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building the Future <br />
             <span className="text-orange-500">Together</span>
          </h1>
          <p className="text-lg md:text-xl">
            We offer top-quality architectural design, construction, and <br /> electrotechnical services for all your building and <br /> maintenance needs.
          </p>
        </div>

        {/* Info Section */}
         
      </div>

      {/* Stats Section */}
     
     
    </div>
        </div>
    )
}