import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div class="row m-2">
          <div class="col-12">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-infos-list"
                data-toggle="list"
                href="#list-infos"
                role="tab"
                aria-controls="infos"
              >
                Infos
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-contact-list"
                data-toggle="list"
                href="#list-contact"
                role="tab"
                aria-controls="contact"
              >
                Contact
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-experience-list"
                data-toggle="list"
                href="#list-experience"
                role="tab"
                aria-controls="experience"
              >
                Expérience
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-formation-list"
                data-toggle="list"
                href="#list-formation"
                role="tab"
                aria-controls="formation"
              >
                Formation
              </a>
            </div>
          </div>
          <div class="col-12">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-infos"
                role="tabpanel"
                aria-labelledby="list-infos-list"
              >
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h4>
                      Je recherche une entreprise d’accueil pour effectuer mon
                      alternance en qualité de Concepteur Développeur
                      d'Applications dans le secteur de l'informatique.
                      Autonome, curieux avec un attrait pour le travail
                      d'équipe, je serai heureux de vous rencontrer pour vous
                      parler plus en détail de ma motivation.
                    </h4>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-contact"
                role="tabpanel"
                aria-labelledby="list-contact-list"
              >
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Abdelhak BELAID</h3>
                    <h4>Concepteur Développeur d'Applications</h4>
                    <h5 class="text-muted">Loos, Hauts-de-France, France</h5>
                    <h5>07 82 92 62 92</h5>
                    <h5>abdelhak.belaid@outlook.com</h5>
                    <h5>https://github.com/AbdelhakBLD</h5>
                    <h5>https://www.linkedin.com/in/abdelhak-belaid/</h5>
                    <h5>2i Tech Academy – 06.80.53.90.15 – alternance-lille@2itechacademy.com</h5>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-experience"
                role="tabpanel"
                aria-labelledby="list-experience-list"
              >
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Développeur web front-end</h3>
                    <h4>INSY2S</h4>
                    <h5 class="text-muted">nov. 2019 – déc. 2019 - 2 mois</h5>
                    <h5 class="text-muted">Région de Lille, France</h5>
                    <h5>
                      Développement d'une interface de gestion de stock (dossier
                      précarité énergétique). Développement d’un site ELM
                      (Enterprise Learning Management). Travail avec la méthode
                      SCRUM, organisation des tâches avec Trello, sprint et
                      présentation hebdomadaires. React.js, MDBoostrap,
                      JHipster, Postman, Java, Spring, GitLab, Jenkins.
                    </h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Technicien étude de prix</h3>
                    <h4>MCI SAS</h4>
                    <h5 class="text-muted">juil. 2014 – avr. 2015 - 10 mois</h5>
                    <h5 class="text-muted">
                      Villeneuve-d'Ascq, Hauts-de-France, France
                    </h5>
                    <h5>
                      •Établissement feuille de chiffrage et devis pour la
                      maintenance d’équipements frigorifiques commerciales et
                      industriels.
                    </h5>
                    <h5>•Référent technique pour les coordinateurs.</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Technicien étude de prix</h3>
                    <h4>MCI SAS - Stage</h4>
                    <h5 class="text-muted">mai 2014 - 1 mois</h5>
                    <h5 class="text-muted">
                      Villeneuve-d'Ascq, Hauts-de-France, France
                    </h5>
                    <h5>
                      •Établissement feuille de chiffrage et devis pour la
                      maintenance d’équipements frigorifiques commerciales et
                      industriels.
                    </h5>
                    <h5>•Référent technique pour les coordinateurs.</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Technicien dépanneur CVC - Frigoriste</h3>
                    <h4>MCI SAS - Stage</h4>
                    <h5 class="text-muted">dec 2013 - 1 mois</h5>
                    <h5 class="text-muted">
                      Villeneuve-d'Ascq, Hauts-de-France, France
                    </h5>
                    <h5>
                      • Nettoyage de condenseurs, meubles et vitrines
                      frigorifiques
                    </h5>
                    <h5>
                      • Vérification étanchéité et recherche de fuite sur
                      circuit frigorifiques
                    </h5>
                    <h5>• Tirage au vide sur circuit frigorifique</h5>
                    <h5>
                      • Prise de pressions sur circuit frigorifique à l’aide de
                      manifold
                    </h5>
                    <h5>• Pose dépose d’équipements frigorifiques</h5>
                    <h5>• Câblage d’armoire électrique</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Technicien dépanneur Plomberie - Chauffage</h3>
                    <h4>Jean-Claude Quatannens - Stage</h4>
                    <h5 class="text-muted">
                      sep. 2008 - juin 2012 - 4 mois de stage entre 2008 et 2012
                    </h5>
                    <h5 class="text-muted">Emmerin, Hauts-de-France, France</h5>
                    <h5>• Brasage cuivre / soudure acier</h5>
                    <h5>• Façonnage tube cuivre / acier</h5>
                    <h5>• Sertissage PER / multicouche</h5>
                    <h5>
                      • Pose dépose d'équipements sanitaires et thermiques
                    </h5>
                    <h5>
                      • Vérification étanchéité et recherche de fuite sur
                      circuit sanitaires, thermiques et gaz
                    </h5>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-formation"
                role="tabpanel"
                aria-labelledby="list-formation-list"
              >
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>2i Tech Academy - Villeneuve-d'Ascq</h3>
                    <h4>Concepteur Développeur d'Applications BAC+4</h4>
                    <h5 class="text-muted">2020 – 2022</h5>
                    <h5>Concevoir et développer :</h5>
                    <h5>• des composants d’interface utilisateur</h5>
                    <h5>• la persistance des données</h5>
                    <h5>• une application multicouche répartie</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>AFPA</h3>
                    <h4>Développeur full stack</h4>
                    <h5 class="text-muted">
                      01 juillet 2019 au 13 novembre 2019
                    </h5>
                    <h5>
                      Acquisition des bases et de certaines notions avancées en
                      Front End et Back End :
                    </h5>
                    <h5>• HTML5, CSS3, BootStrap, JavaScript, Jquery</h5>
                    <h5>• Angular, React.js, Vue.js</h5>
                    <h5>• Node.js, Express.js, API, MySQL, MongoDB</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Université de Lille</h3>
                    <h4>DUT informatique</h4>
                    <h5 class="text-muted">2016 - 2018</h5>
                    <h5>
                      Acquisition des bases et de certaines notions avancées en
                      Front End et Back End :
                    </h5>
                    <h5>
                      • Programmation orientée objet java, java EE, java FX
                    </h5>
                    <h5>• Programmation système en C sous Debian </h5>
                    <h5>
                      • Base de données relationnel : Merise, SQL, COBOL, AS400
                    </h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Lycée César-Baggio, Lille</h3>
                    <h4>BTS Fluides, énergies, environnement </h4>
                    <h5 class="text-muted">2012 - 2014</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Lycée Maurice Duhamel, Loos</h3>
                    <h4>
                      BAC PRO Technicien de maintenance des systèmes
                      énergétiques et climatiques (TMSEC)
                    </h4>
                    <h5 class="text-muted">2010 - 2012</h5>
                  </div>
                </div>
                <div class="card bg-light my-2">
                  <div class="card-body">
                    <h3>Lycée César-Baggio, Lille</h3>
                    <h4>BEP Installateur Sanitaire et Thermique</h4>
                    <h5 class="text-muted">2008 - 2012</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
