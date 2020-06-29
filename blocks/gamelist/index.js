( function( blocks, element, data ) {
    var el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        withSelect = data.withSelect;

    registerBlockType( 'peliarvostelut2020/gamelist', {
        title: 'Gamelist',
        icon: 'megaphone',
        category: 'widgets',
        edit: withSelect( function( select ) {
            return {
                posts: select( 'core' ).getEntityRecords( 'postType', 'game' ),
            };
        } )( function( props ) {
            if ( ! props.posts ) {
                return 'Loading...';
            }

            if ( props.posts.length === 0 ) {
                return 'No posts';
            }
            var className = props.className;
            var post = props.posts[ 0 ];

						return props.posts.map(p => {
							return `${p.title.rendered}<br />`
						})
        } ),
    } );
}(
    window.wp.blocks,
    window.wp.element,
    window.wp.data,
) );
