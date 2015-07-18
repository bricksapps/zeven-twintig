<?php
/**
 * Jetpack Compatibility File
 * See: https://jetpack.me/
 *
 * @package 27rt Theme
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function zeven_twintig_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'zeven_twintig_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function zeven_twintig_jetpack_setup
add_action( 'after_setup_theme', 'zeven_twintig_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function zeven_twintig_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function zeven_twintig_infinite_scroll_render
