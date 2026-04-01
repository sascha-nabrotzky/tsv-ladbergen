<?php
defined('TYPO3') || die();

$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:site_package/Configuration/RTE/Default.yaml';

// Ensure upload validation uses the same extension list in all contexts.
$GLOBALS['TYPO3_CONF_VARS']['SYS']['mediafile_ext'] = 'jpg,jpeg,png,webp';
$GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'] = 'jpg,jpeg,png,webp';