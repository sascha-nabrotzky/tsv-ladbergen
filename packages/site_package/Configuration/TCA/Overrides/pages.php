<?php
defined('TYPO3') || die();

// Hide the global default/article crop variant in page resources.
$GLOBALS['TCA']['pages']['columns']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']['default']['disabled'] = true;