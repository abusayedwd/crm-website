import { CheckCircleOutlined } from '@ant-design/icons';
import benner from '@/../../public/image/benner.png'


export default function Benner() {
    return(
        <div>
          <div className="relative bg-gray-900 text-white md:h-[900px] h-[400px] flex items-center">
  {/* Background Image */}
  <div
    className="absolute  bg-cover bg-center inset-0 opacity-60"
    style={{
      backgroundImage: `url(${benner.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      boxSizing: 'border-box',
      
    }}
  />

  {/* Overlay Content */}
  <div className="z-10 container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
    {/* Text Section */}
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Building the Future <br />
        <span className="text-orange-500">Together</span>
      </h1>
      <p className="text-base md:text-lg">
        We offer top-quality architectural design, construction, and <br /> electrotechnical services for all your building and <br /> maintenance needs.
      </p>
    </div>

    {/* Info Section (Add your info section here if needed) */}
  </div>

  {/* Stats Section (Add your stats section here if needed) */}
</div>

        </div>
    )
}