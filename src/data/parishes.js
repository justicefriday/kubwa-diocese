// PLACEHOLDER DATA: every parish name below is invented. Replace with the real ones.
// To replace one archdeaconry, edit its list. To remove its website link, set its url to ''.

const data = {
  Cathedral: ["St. Stephen's Church", "St. Philip's Church", "St. Thomas' Church", "Holy Trinity Church", "Good Shepherd Church"],
  Kubwa: ["St. James' Church", "St. Michael's Church", "St. Gabriel's Church", "Church of the Redeemer", "Grace Church"],
  Nyanya: ["St. Timothy's Church", "St. Titus' Church", "St. Simon's Church", "Church of the Advent", "Church of the Epiphany"],
  Bwari: ["St. Jude's Church", "St. Augustine's Church", "St. Francis' Church", "Church of the Resurrection", "Holy Cross Church"],
  Karu: ["St. Cyprian's Church", "St. Columba's Church", "St. George's Church", "Church of the Ascension", "Divine Mercy Church"],
  Karshi: ["St. David's Church", "St. Patrick's Church", "St. Cuthbert's Church", "Church of the Transfiguration", "Holy Spirit Church"],
  Kuje: ["St. Alban's Church", "St. Hilda's Church", "St. Bede's Church", "All Saints' Church", "Church of the Nativity"],
  Karmo: ["St. Anne's Church", "St. Joseph's Church", "St. Martin's Church", "Church of the Holy Name", "Living Word Church"],
  Lugbe: ["St. Barnabas Church", "St. Clement's Church", "St. Dunstan's Church", "Church of the Good News", "Faith Church"],
  "FHA Lugbe": ["St. Ambrose's Church", "St. Basil's Church", "St. Chad's Church", "Church of the Living God", "Hope Church"],
  Saburi: ["St. Edmund's Church", "St. Felix's Church", "St. Gregory's Church", "Church of the Open Door", "Mercy Church"],
  Airport: ["St. Ignatius' Church", "St. Jerome's Church", "St. Kevin's Church", "Church of the Holy Family", "Peace Church"],
  "Lugbe-East": ["St. Lawrence's Church", "St. Margaret's Church", "St. Nicholas' Church", "Church of the Cornerstone", "Covenant Church"],
  Pegi: ["St. Oswald's Church", "St. Polycarp's Church", "St. Quentin's Church", "Church of the Beatitudes", "Victory Church"],
  Gosa: ["St. Raphael's Church", "St. Stanislaus' Church", "St. Theresa's Church", "Church of the Harvest", "Shiloh Church"],
  Dutse: ["St. Ursula's Church", "St. Vincent's Church", "St. Wilfrid's Church", "Church of the Holy Light", "Zion Church"],
  Byazhin: ["St. Zachary's Church", "St. Aidan's Church", "St. Boniface's Church", "Church of the Anointing", "Bethel Church"],
}

export const archdeaconries = Object.entries(data).map(([name, parishes]) => ({
  name,
  url: 'https://example.com', // replace with the archdeaconry's real website
  parishes,
}))

// Example: ['Sunday Service', '8:00 am and 10:00 am']. While empty, the section is hidden.
export const serviceTimes = []