"use client";
import { SendContactForm } from "@/app/actions/email";
import { toast } from "react-toastify";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter-area" id="contact">
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
                          Votre vision, notre savoir-faire : Transformons vos
                          idées en structures vivantes
                        </h2>
                      </div>
                      <form
                        action={async (formData: FormData) => {
                          await SendContactForm(formData);
                          toast.success("Message envoyé avec succès !");
                        }}
                        className="newsletter-form mx-0"
                      >
                        <ul className="list-wrap">
                          <li>
                            <input
                              type="text"
                              name="nom"
                              placeholder="Nom"
                              required
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="prenom"
                              placeholder="Prénom"
                              required
                            />
                          </li>
                          <li>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="telephone"
                              placeholder="Téléphone"
                              required
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="societe"
                              placeholder="Société"
                            />
                          </li>
                          <li>
                            <select name="interet" required>
                              <option value="">
                                Vous êtes intéressé par...
                              </option>
                              <option value="Villa en Bois">Villa en Bois</option>
                              <option value="Charpente">Charpente</option>
                              <option value="Pergola">Pergola</option>
                              <option value="Bâtiment Modulaire">Bâtiment Modulaire</option>
                              <option value="autre">Autre</option>
                            </select>
                          </li>
                          <li className="w-100">
                            <textarea
                              name="message"
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
                              J&apos;accepte les{" "}
                              <span>conditions générales</span> de traitement
                              des données personnelles.
                            </label>
                          </div>
                          <div className="flex items-center justify-end w-full mt-4">
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
