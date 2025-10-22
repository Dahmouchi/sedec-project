const Newsletter = () => {
  return (
    <>
      <section className="newsletter-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-inner">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="newsletter-content">
                      <div className="section-title mb-50 text-center">
                        <span className="sub-title">Contactez-nous</span>
                        <h2 className="title">
                          Votre vision, notre savoir-faire : Transformons vos idées en structures vivantes
                        </h2>
                      </div>
                      <form action="#" className="newsletter-form">
                        <ul className="list-wrap">
                          <li>
                            <input type="text" placeholder="Nom" required />
                          </li>
                          <li>
                            <input type="text" placeholder="Prénom" required />
                          </li>
                          <li>
                            <input type="email" placeholder="Email" required />
                          </li>
                          <li>
                            <input
                              type="text"
                              placeholder="Téléphone"
                              required
                            />
                          </li>
                          <li>
                            <input type="text" placeholder="Société" />
                          </li>
                          <li>
                            <select required>
                              <option value="">
                                Vous êtes intéressé par...
                              </option>
                              <option value="solution1">Solution 1</option>
                              <option value="solution2">Solution 2</option>
                              <option value="solution3">Solution 3</option>
                              <option value="autre">Autre</option>
                            </select>
                          </li>
                          <li className="w-100">
                            <textarea
                              placeholder="Votre message"
                              rows={5}
                              required
                            ></textarea>
                          </li>
                          <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="termsCheck"
                            required
                          />
                          <label htmlFor="termsCheck">
                            J&apos;accepte les <span>conditions générales</span> de
                            traitement des données personnelles.
                          </label>
                        </div>
                          <div className="flex items-center justify-end w-full">
                            <li className="submit-btn">
                            <input type="submit" value="Envoyer" />
                          </li>
                          </div>
                        </ul>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Newsletter;
