import './Testimonial.css';

function Testimonial() {
    function showReview(index) {
        const testimonials = document.querySelectorAll('.user-text');
        const pictures = document.querySelectorAll('.user-pic');
      
        testimonials.forEach(testimonial => {
          testimonial.classList.remove('active-text');
        });
        pictures.forEach(picture => {
          picture.classList.remove('active-pic');
        });
      
        // Find the selected review and picture
        const selectedTestimonial = testimonials[index - 1];
        const selectedPicture = pictures[index - 1];
      
        // Add the 'active-text' class to the selected review and 'active-pic' class to the selected picture
        selectedTestimonial.classList.add('active-text');
        selectedPicture.classList.add('active-pic');
      }
      
      
    return (
        <div className='container2' id="page3">
            <div className='testimonial'>
                <div className='testimonial-text'>
                    <br/>
                    <h1 >Testimonial of Bintan Visitors</h1>
                    
                    <div className='user-text active-text'>
                        <p>"Wow bintan.... what a beautiful island! Also I went with a different style for this vlog. I wanted to go for a travel diary feel with a much larger focus on montages and b-roll as opposed to talking straight to the camera as often. Let me know what you think about this! 🥰🤍"</p>
                        <span>Kels Vaughne (On Her <a target={'_blank'} href="https://www.youtube.com/watch?v=giWG4ztgmqo&t=15s" title="See Her Vlog At Youtube">Youtube Vlog Video</a> )</span>
                    </div>
                    <div className='user-text'>
                        <p>"Love Bintan.....worked there for a few months taking clients jet skit safari. Has a bit of culture and touristy vibe. Beaches there are amazing"</p>
                        <span>Charlton Fredericks</span>
                    </div>
                    <div className='user-text'>
                        <p>"This is such a beautiful spot; the beach is regularly cleaned and the facilities are great...it could be a perfect getaway."</p>
                        <span>Ilsa Jones @Bintan White Sands Island</span>
                    </div>
                    <div className='user-text'>
                        <p>"Nice place to be if you really love water sports & the sun!."</p>
                        <span>May Koh, @Treasure Bay Bintan</span>
                    </div>
                    <div className='user-text'>
                        <p>"Nice place for learn history of melayu kingdom and religious place."</p>
                        <span>Vanri Sianturi @Penyengat Island Across Bintan</span>
                    </div>
                </div>
                <div className='textimonial-pic'>
                    <img src="./pic1.jpg" className='user-pic active-pic' onClick={() => showReview(1)} alt='dani1'/>
                    <img src="./CharltonFredericks.jfif" className='user-pic' onClick={() => showReview(2)} alt='dani1'/>
                    <img src="./pic3.png" className='user-pic' onClick={() => showReview(3)} alt='dani1'/>
                    <img src="./pic4.png" className='user-pic' onClick={() => showReview(4)} alt='dani1'/>
                    <img src="./pic5.png" className='user-pic' onClick={() => showReview(5)} alt='dani1'/>
                </div>
            </div>
        </div>
    )
}


export default Testimonial;