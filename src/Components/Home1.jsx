import React from 'react'
import './Home1.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home1() {

  return (
    <div>
      <div style={{ position: 'relative' }}>

        <img src="https://images.unsplash.com/photo-1668095736244-584de87f6724?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />


        <p style={{
          position: 'absolute',
          top: '7%',
          left: '15%',
          transform: 'translate(-150%, -20%)',
          color: 'white',
          fontSize: '20px',
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          HOT <br></br>
          PRODUCTS

        </p>

        <p style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '50px',

          padding: '5px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          Get Your Gadget <br></br>
          On This Store
        </p>


        <p style={{
          position: 'absolute',
          top: '28%',
          left: '15%',
          transform: 'translate(-180%, -20%)',
          color: 'white',
          fontSize: '20px',

          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          start from
        </p>

        <p style={{
          position: 'absolute',
          top: '35%',
          left: '15%',
          transform: 'translate(-220%, -30%)',
          color: '#153b70',
          fontSize: '40px',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          <b>$28</b>

        </p>

        <Button
          className='btn btn-primary'
          style={{
            position: 'absolute',
            top: '43%',
            left: '15%',
            transform: 'translate(-150%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            backgroundColor: '#153b70',
            color: 'white'

          }}
        >
          LEARN MORE
        </Button>
      </div>



      <div className="card-container">
        <div className="card">
          <div className="text-content">
            <h3>NEW YEAR SALE</h3>
            <h1>GET AN EXTRA </h1>
            <h1>60% OFF</h1>
            <button className="shop-now">Shop Now</button>
          </div>
          <div className="image-placeholder">
            <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text-content">
            <h3>NEW YEAR SALE</h3>
            <h1>50%</h1>
            <h1> DISCOUNT ON </h1>
            <h1>AIRPODS</h1>
            <button class="shop-now">Shop Now</button>
          </div>
          <div className="image-placeholder">
            <img src="https://media.istockphoto.com/id/1254998855/photo/airpod-with-black-background.jpg?s=2048x2048&w=is&k=20&c=KQoQfzYgkC0-EytL5FG4s6dtriqIrsZCfMaZ4rPhXMs=" width={'100%'} height={'100%'} alt="" />
          </div>
        </div>
      </div>


      <h1 className='titles'>FLASH SALE</h1>
      <h1 className='titless'>TODAY</h1>

      <div className="container">
        {/* Main Card */}
        <div className="main-card" id="main-card">
          <p className="discount-text">Up to 30% <br></br>Off!</p>
          <div className="countdown">
            <p>Sale Ends In:</p>
            <div className="time">
              <div>
                <span>1</span>
                <br />
                Hrs
              </div>
              <div>
                <span>20</span>
                <br />
                Min
              </div>
              <div>
                <span>49</span>
                <br />
                Sec
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="product-cards">
          <div className="product-card">
            <button className="shop-now">25% OFF</button>
            <div className="image-placeholder">
              <img src="https://images.pexels.com/photos/8038334/pexels-photo-8038334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <p className="product-title">Wireless Headphone</p>
            <p className="price">
              <span className="original">$29.99</span> -{" "}
              <span className="discounted">$19.99</span>
            </p>
            <p className="stock">
              Available: 10 <span className="sold">Sold: 5</span>
            </p>
            <div className="progress-bar">
              <div style={{ width: "33%" }}></div>
            </div>
          </div>

          <div className="product-card">
            <button className="shop-now">25% OFF</button>
            <div className="image-placeholder">
              <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <p className="product-title">McBook Laptop</p>
            <p className="price">
              <span className="original">$29.99</span> -{" "}
              <span className="discounted">$19.99</span>
            </p>
            <p className="stock">
              Available: 50 <span className="sold">Sold: 28</span>
            </p>
            <div className="progress-bar">
              <div style={{ width: "56%" }}></div>
            </div>
          </div>

          <div className="product-card">
            <button className="shop-now">25% OFF</button>
            <div className="image-placeholder">
              <img src="https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <p className="product-title">Smartwatch</p>
            <p className="price">
              <span className="original">$29.99</span> -{" "}
              <span className="discounted">$19.99</span>
            </p>
            <p className="stock">
              Available: 18 <span className="sold">Sold: 17</span>
            </p>
            <div className="progress-bar">
              <div style={{ width: "94%" }}></div>
            </div>
          </div>
        </div>
      </div>




      <div style={{ position: 'relative' }}>

        <img src="https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />





        <p style={{
          position: 'absolute',
          top: '20%',
          left: '75%',
          transform: 'translate(-46%, -50%)',
          color: 'white',
          fontSize: '50px',

          padding: '5px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          AN EXTREAM <br></br>
          BASS
        </p>


        <p style={{
          position: 'absolute',
          top: '28%',
          left: '87%',
          transform: 'translate(-175%, -20%)',
          color: 'white',
          fontSize: '20px',

          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          start from $ 15,99
        </p>

        <p style={{
          position: 'sticky',
          top: '35%',
          left: '70%',
          transform: 'translate(-175%, -20%)',
          color: 'white',
          fontSize: '20px',

          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          New Release Wireless Headphone from SoundPro Sound Technology.<br></br>
          Using Bluetooth 5.0, Noice cancelinmg and APTX Technology to make a
          <br></br>good experience when listening to music.
        </p>

        <Button
          className='btn btn-primary'
          style={{
            position: 'absolute',
            top: '43%',
            left: '80%',
            transform: 'translate(-150%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '15px',
            color: 'white',
            backgroundColor: '#153b70',

          }}
        >
          SHOP NOW
        </Button>
      </div>



      <div className="section">
        <h1 className="title">FEATURED</h1>
        <h1 className="title">PRODUCT</h1>

        <div className="product-section">
          <div className="product-grid">
            {/* First Row */}
            <div className="product-row">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://plus.unsplash.com/premium_photo-1677158265072-5d15db9e23b2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />
                </div>

                <h3>Conce Headphone</h3>
                <p>
                  <span className="price-original">$25.99-</span>
                  <span className="price-discount">$19.99</span>
                </p>
                <button className="add-to-cart">ADD TO CART</button>
              </div>

              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1617350142147-7403b8fb9889?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />
                </div>

                <h3>Golex Budd</h3>
                <p>
                  <span className="price-original">$25.99-</span>
                  <span className="price-discount">$19.99</span>
                </p>
                <button className="add-to-cart">ADD TO CART</button>
              </div>

              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />
                </div>

                <h3>TWS Brooklyn XD</h3>
                <p>
                  <span className="price-original">$25.99-</span>
                  <span className="price-discount">$19.99</span>
                </p>
                <button className="add-to-cart">ADD TO CART</button>
              </div>

            </div>

            {/* Second Row */}
            <div className="product-row">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1647964185852-cdc3069aa0ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />
                </div>

                <h3>Smartphone 64</h3>
                <p>
                  <span className="price-original">$25.99-</span>
                  <span className="price-discount">$19.99</span>
                </p>
                <button className="add-to-cart">ADD TO CART</button>
              </div>

              <div className="product-card">
                <div className="product-image">
                  <img src="https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />
                </div>

                <h3>Anzell Laptop SSD</h3>
                <p>
                  <span className="price-original">$25.99-</span>
                  <span className="price-discount">$19.99</span>
                </p>
                <button className="add-to-cart">ADD TO CART</button>
              </div>

              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={'100%'} height={'100%'} alt="" />
                </div>

                <h3>BT Gaming Bass</h3>
                <p>
                  <span className="price-original">$22.99-</span>
                  <span className="price-discount">$18.99</span>
                </p>
                <button className="add-to-cart">ADD TO CART</button>
              </div>
            </div>
          </div>



          <div className="deals-section">
            <h2>BEST</h2>
            <h2>PRODUCT</h2>
            <h2>DEALS</h2>
            <p>Get a 20% cashback when buying TWS Product from SoundPro Audio Technology.</p>
            <button className="shop">Shop Now</button>

          </div>

        </div>




        <div className="pagination">
          <button className="page-btn">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
        </div>
      </div>




      <section className="editor-choice">
        <h1>EDITOR'S BEST </h1>
        <h1>CHOICE</h1>
        <div className="underline"></div>
        <div className="product-grid">

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Fitness and activity Tracker</h2>
            <p className="price">$33.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Xbox White Joystick</h2>
            <p className="price">$98.4</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/9767551/pexels-photo-9767551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Super Boost Speaker</h2>
            <p className="price">$33.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/7787232/pexels-photo-7787232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Smartphone 190 Megapixel</h2>
            <p className="price">$33.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/6889216/pexels-photo-6889216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Ice White Airpods</h2>
            <p className="price">$521.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Hazor Mouse Gaming</h2>
            <p className="price">$21.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/3812048/pexels-photo-3812048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Keyboard RGB and Mechanic</h2>
            <p className="price">$33.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100%'} height={'100%'} alt="" />
            </div>
            <h2>Super Boost Headphones</h2>
            <p className="price">$33.3</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>(12)</span>
            </div>
          </div>
        </div>
      </section>




      <div className="testimonial-container">
        <h2 className="section-title">TESTIMONIALS</h2>
        <div className="testimonial-card">
          <div className="profile-circle">
            <img
              src="https://images.pexels.com/photos/26692095/pexels-photo-26692095/free-photo-of-a-businesswoman-sitting-at-the-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile Picture"
            />
          </div>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, senectus sit consequat volutpat. In ornare at fringilla vulputate eget est.
            Nisl, magna vitae non, vestibulum nec sollicitudin suspendisse risus. Id arcu ac eu nulla morbi enim diam felis amet.
            Quisque non dolor turpis ultricies. Neque donec libero mi lacus. Egestas pulvinar nec elementum, ullamcorper.
            Non feugiat potenti velit a adipiscing lacinia eget.
          </p>
          <a href="#" class="testimonial-name">Ameli Johnsonn</a>
        </div>
      </div>
    </div>


  )
}

export default Home1