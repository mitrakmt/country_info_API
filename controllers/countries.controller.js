const countriesController = {}

countriesController.getCountryDescription = (req, res) => {
    res.status(200).send({
        country: 'Thailand',
        countryCode: 'TH',
        description: 'A country on Southeast Asia’s Indochina peninsula known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha, a revered symbol.'
    })
}

module.exports = countriesController