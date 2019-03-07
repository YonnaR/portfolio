import React from 'react'

export default () => {
  return (
    <section className="contact_area p_120">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-home"></i>
                            <h6>Paris, France</h6>
                            <p>Gagny</p>
                        </div>
                        {/* <div className="info_item">
                            <i className="lnr lnr-phone-handset"></i>
                            <h6><a href="#">00 (440) 9865 562</a></h6>
                            <p>Mon to Fri 9am to 6 pm</p>
                        </div> */}
                        <div className="info_item">
                            <i className="lnr lnr-envelope"></i>
                            <h6><a href="#">contact@eazys-dev.fr</a></h6>
                            <p>Toujours présent en cas de besoin.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Entrez votre nom"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Entrez votre addresse email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Entrez votre sujet"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" rows="1" placeholder="Entrez votre Message"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn submit_btn">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
