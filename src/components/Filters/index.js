
const Filters = () => {
    return (
      <section className={'w-1/4 pr-6 hidden lg:block'}>
          <div className={'category'}>
              <p className={'mb-6 text-lg font-bold'}>Category</p>
              <form>
                  <div className={'form-group mb-xl'}>
                      <input type="checkbox" name="category" value={'People'} id={'people-box'} className={'border-3 border-black'}/>
                      <label htmlFor={'people-box'} className={'ml-3 text-lg'}>People</label>
                  </div>
              </form>
          </div>
          <hr style={{borderColor: '#C2C2C2'}} className={'border-t w-100 mb-6'}/>
          <div className={'category'}>
              <p className={'mb-6 text-lg font-bold'}>Price range</p>
              <form>
                  <div className={'form-group mb-xl'}>
                      <input type="checkbox" name="category" value={'People'} id={'price-box'} className={'border-3 border-black'}/>
                      <label htmlFor={'price-box'} className={'ml-3 text-lg'}>Lower than $20</label>
                  </div>
              </form>
          </div>
      </section>
    )
}
export default Filters