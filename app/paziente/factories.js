paziente.factory('Paziente', function () {

  /**
   * Constructor, with class name
   */
  function Paziente(id, nome, cognome, sesso, codice_fiscale, data_nascita, nazionalita,
                    indirizzo_residenza, comune_residenza, telefono, cellulare, email, profilo, esenzioni, owner,
                    visite_url, paziente_url) {
    this.id = id;
    this.nome = nome;
    this.cognome= cognome;
    this.sesso = sesso;
    this.codice_fiscale = codice_fiscale;
    this.data_nascita;
    this.nazionalita = nazionalita;
    this.indirizzo_residenza = indirizzo_residenza;
    this.comune_residenza = comune_residenza;
    this.telefono = telefono;
    this.cellulare = cellulare;
    this.email = email;
    this.profilo = profilo;
    this.esenzioni = esenzioni;
    this.owner = owner;
    this.visite_url = visite_url;
    this.paziente_url = paziente_url;
  }

  /**
   * Public method, assigned to prototype
   */
  Paziente.prototype.getFullName = function () {
    return this.nome + ' ' + this.cognome;
  };

  /**
   * Private property
   */
  var possibleRoles = ['admin', 'editor', 'guest'];

  /**
   * Private function
   */
//  function checkRole(role) {
//    return possibleRoles.indexOf(role) !== -1;
//  }

  /**
   * Static property
   * Using copy to prevent modifications to private property
   */
//  User.possibleRoles = angular.copy(possibleRoles);

  /**
   * Static method, assigned to class
   * Instance ('this') is not available in static context
   */
  Paziente.build = function (data) {
    return new Paziente(
          data.id,
          data.nome,
          data.cognome,
          data.sesso,
          data.codice_fiscale,
          data.data_nascita,
          data.nazionalita,
          data.indirizzo_residenza,
          data.comune_residenza,
          data.telefono,
          data.cellulare,
          data.email,
          data.profilo,
          data.esenzioni,
          data.owner,
          data.visite_url,
          data.paziente_url
    );
  };

    Paziente.apiResponseTransformer = function (responseData) {
      if (angular.isArray(responseData)) {
        return responseData
          .map(Paziente.build)
          .filter(Boolean);
      }
      return Paziente.build(responseData);
    };

  /**
   * Return the constructor function
   */
  return Paziente;
})