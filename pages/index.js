import PublicLayout from '@/layouts/public'
import Featured from '@/components/Featured'
import Divider from '@/components/Divider'
import Gallery from '@/components/Gallery'

export default function Home() {
    return (
        <PublicLayout>
          <div className={'px-3 lg:px-2xl'}>
              <Divider />
              <Featured />
              <Divider />
              <Gallery />
          </div>
        </PublicLayout>
    )
}
