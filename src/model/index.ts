//Création de la classe abstraite qu'est CArgaison

abstract class Cargaison {
    // Attributs
    protected id: string;
    protected poids: number;

    // Constructeur
    constructor(id: string, poids: number) {
        this.id = id;
        this.poids = poids;
    }

    // Méthode abstraite à implémenter par les sous-classes
    abstract afficherDetails(): void;
}

//Hériytage de la classe

class CargaisonAerienne extends Cargaison {
    private compagnieAerienne: string;

    constructor(id: string, poids: number, compagnieAerienne: string) {
        super(id, poids);
        this.compagnieAerienne = compagnieAerienne;
    }

    afficherDetails(): void {
        console.log(`Cargaison Aérienne - ID: ${this.id}, Poids: ${this.poids}kg, Compagnie: ${this.compagnieAerienne}`);
    }
}

class CargaisonMaritime extends Cargaison {
    private nomNavire: string;

    constructor(id: string, poids: number, nomNavire: string) {
        super(id, poids);
        this.nomNavire = nomNavire;
    }

    afficherDetails(): void {
        console.log(`Cargaison Maritime - ID: ${this.id}, Poids: ${this.poids}kg, Navire: ${this.nomNavire}`);
    }
}

class CargaisonTerrestre extends Cargaison {
    private nomTransporteur: string;

    constructor(id: string, poids: number, nomTransporteur: string) {
        super(id, poids);
        this.nomTransporteur = nomTransporteur;
    }

    afficherDetails(): void {
        console.log(`Cargaison Terrestre - ID: ${this.id}, Poids: ${this.poids}kg, Transporteur: ${this.nomTransporteur}`);
    }
}



//instentiation des sous classes de cargaison
const cargaisons: Cargaison[] = [
    new CargaisonAerienne('A001', 500, 'Air France'),
    new CargaisonMaritime('M001', 2000, 'Alioune Sitoé Diatta'),
    new CargaisonTerrestre('T001', 1000, 'Transports bus')
];

cargaisons.forEach(cargaison => cargaison.afficherDetails());



// POlymorphisme

function afficherDetailsCargaisons(cargaisons: Cargaison[]): void {
    cargaisons.forEach(cargaison => cargaison.afficherDetails());
}

// Création des instances de chaque type de cargaison
const cargaisons2: Cargaison[] = [
    new CargaisonAerienne('A001', 500, 'Air France'),
    new CargaisonMaritime('M001', 2000, 'Alioune Sitoé Diatta'),
    new CargaisonTerrestre('T001', 1000, 'Transports Bus')
];

// Utilisation de la fonction générique pour afficher les détails
afficherDetailsCargaisons(cargaisons);
