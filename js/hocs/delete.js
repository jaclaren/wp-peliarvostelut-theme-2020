// const fetchPageFromAPI = (page, cb) => {
//   fetch('data/reviews_01.json')
//     .then(response => response.json())
//     .then(response => {
//       cb(response)
//     })
// }
//
// const generateSkeletonObjects = (num) => {
//   return Array.apply({ reload : true }, Array(num));
// }
//
// const CardLoader = props => {
//
//     const [eventHandlerSet, _setEventHandler] = React.useState(false);
//     const [bottomReached, _setBottomReached] = React.useState(false);
//     const [currentPage, _setCurrentPage] = React.useState(0);
//     const [loading, _setLoading] = React.useState(true);
//     const [items, _setItems] = React.useState([]);
//     const [trackedIndex, _setTrackedIndex] = React.useState(null);
//     const [fetchedItems, _setFetchedItems] = React.useState([]);
//     const [revealIndexes, _setRevealIndexes] = React.useState([]);
//
//     const ref = React.useRef()
//
//     React.useEffect(() => {
//           _setItems(generateSkeletonObjects(props.maxItems))
//           setTimeout(() => {
//             fetch('data/reviews_01.json')
//             .then(response => response.json())
//             .then(response => {
//               _setItems(response)
//             })
//           }, 800)
//           _setLoading(false)
//       }, [])
//
//     React.useEffect(() => {
//       _setItems(items.map((item, index) => {
//         if(index === revealIndexes) {
//           return Object.assign({}, item, { display : true })
//         }
//         return item;
//       }))
//     }, [revealIndexes])
//
//     const revealCard = index => {
//       _setRevealIndexes(index)
//       // _setItems(items.map((item, i) => {
//       //   return index == i ? Object.assign({}, item, { display : true }) : item;
//       // }))
//     }
//
//     return <div className={props.class} ref={ref}>
//               {items.map((item, index) => {
//                 // const PropsCard = item && item.display ?  props.card : props.skeletonCard
//                 const isTrackedItem = true
//
//                 return isTrackedItem ? <TrackedItem
//                   observable={ref.current}
//                   isIntersecting={() => revealCard(index)}
//                   >
//                     {<PropsCard {...item}/>}
//                   </TrackedItem>
//                     : <PropsCard {...item} />
//               })}
//             </div>
//
// }
//
//
// ReactDOM.render(
//   <CardLoader
//     class="compilationcardlist"
//     maxItems={60}
//     itemsPerPage={6}
//     card={GameCard}
//     skeletonCard={GameSkeleton}
//   />,
//   document.getElementById('games')
// );
