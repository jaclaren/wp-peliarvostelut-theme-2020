
const CoverImages = [
  '071595092465_55.png',
  '071595092538_66.png',
  '071595099094_38.png',
  '071595099523_57.png',
  '071595140314_45.png',
  '071595151678_49.png',
  '071595230164_59.png',
  '081597492664_66.png',
  '081597492776_43.png',
  '081597492777_11.png',
  '081597492777_41.png',
  '081597492801_14.png',
  '081597492802_16.png',
  '081597492802_18.png',
  '081597492802_20.png',
  '081597492803_22.png',
  '081597492803_24.png',
  '081597492804_26.png',
  '081597492929_28.png',
  '081597492929_30.png',
  '081597492929_32.png',
  '081597492930_34.png',
  '081598368828_4.png',
  '081597492935_64.png',
  '081597492935_62.png',
  '081597492935_53.png',
  '081597492934_51.png',
  '081597492930_47.png',
  '081597492930_36.png',
  'varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020081598512460_49268.jpg',
  'varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020081598512462_49270.jpg',

]

const mockObject = count => Array.from(Array(count),
  (_, i) => {
        return ({id:i,
        title:"Doom Eternal",
        coverimage:`http:\/\/dev-peliarvostelut.net\/wp-content\/uploads\/2020\/${CoverImages[i]}`,
        href:"http:\/\/dev-peliarvostelut.net\/pelit\/doom-eternal\/"})
      }
)
