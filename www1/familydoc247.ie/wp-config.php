<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'familydoc247_website_db' );
/** Database username */
define( 'DB_USER', 'familydoc247_admin' );
/** Database password */
define( 'DB_PASSWORD', 'dygzCzjv2AKgg5o!7' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qc{xpl!2Koqa/*F3!y1g7dFcb2 kF:`=T361r W*% Vym9_#Hfzt8r-d{aqGEO$N' );
define( 'SECURE_AUTH_KEY',  ',j?c{rgC$udm!$Q.-CV-Rvp8HtyWD 7F+h)5q2<nhh4y|M~LTmcjxu/b)|qE` c?' );
define( 'LOGGED_IN_KEY',    '*>6g6BlK;7_$WL4 3KS1fr=?GW2&)Y18H$/5kH9Fa<U*`;GYC{*9}cB||jLk{{IX' );
define( 'NONCE_KEY',        '$EL*O7NCwJa6uNgU)WZ|CRY,x0)qZ_)Lgz~!wsQZv}:p^m|<@28TikMv2@(2aHW[' );
define( 'AUTH_SALT',        '#!~U`ReKu4`TCeHquq<CDO1AySLt#L]2wHSc7X-@nT9TuuL7md$?i~i@02 Z=w!_' );
define( 'SECURE_AUTH_SALT', 'onc>?jQZ;ueY2}&eb<3h=AFUZR+X52l:#?b`[l5h}`j+D6#|1lEWDgr7ZzaL[uGa' );
define( 'LOGGED_IN_SALT',   'cj}v#SO[dXKRaU{d/nyx&*k4pRd[*mz>_E4F`]py^fz>T|8JiIl|~{+B,.ky2oh[' );
define( 'NONCE_SALT',       '<LO,+(^G]ZxWpf$;q9lVW0n(CWu@d4VZQu541>@}Dg5ef~29m5m.ujR!Gakh*?m1' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Add any custom values between this line and the "stop editing" line. */
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
