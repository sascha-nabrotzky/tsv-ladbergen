<?php
defined('TYPO3') || die();

// Disable selected crop variants for regular content element media/image fields.
// The variants remain available globally (e.g. for header/menu specific contexts).
$cropVariantDisables = [
    'image' => ['header', 'menu'],
    'assets' => ['header', 'menu'],
];

foreach ($cropVariantDisables as $column => $variants) {
    foreach ($variants as $variant) {
        $GLOBALS['TCA']['tt_content']['columns'][$column]['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'][$variant]['disabled'] = true;
    }
}