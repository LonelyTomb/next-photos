import PublicLayout from '@/layouts/public'
import Featured from '@/components/Featured'
import Divider from '@/components/Divider'
import Gallery from '@/components/Gallery'
import CartBox from "@/components/Cart";

export default function Home() {
    return (
        <PublicLayout>
          <div className={'mx-3 lg:mx-2xl relative'}>
              <CartBox />
              <Divider />
              <Featured />
              <Divider />
              <Gallery />
          </div>
        </PublicLayout>
    )
}
