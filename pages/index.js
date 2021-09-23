import PublicLayout from '@/layouts/public'
import Featured from '@/components/Featured'
import Divider from '@/components/Divider'
export default function Home() {
    return (
        <PublicLayout>
          <div className={'px-3 lg:px-2xl'}>
              <Divider />
              <Featured />
              <Divider />
          </div>
        </PublicLayout>
    )
}
