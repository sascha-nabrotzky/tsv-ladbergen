<?php
defined('TYPO3') || die();

$table = 'sys_file_reference';
$field = 'crop';

$GLOBALS['TCA'][$table]['columns'][$field]['config'] = [
     'type' => 'imageManipulation',
     'cropVariants' => [
         'header' => [
             'title' => 'Header',
             'allowedAspectRatios' => [
                 '16:9' => [
                     'title' => '16:9',
                     'value' => 16 / 9
                 ],
             ],
         ],
         'menu' => [
            'title' => 'Menu',
            'allowedAspectRatios' => [
                '1:1' => [
                    'title' => '1:1',
                    'value' => 1 / 1
                ],
            ],
        ],
        'article' => [
            'title' => 'Article',
            'allowedAspectRatios' => [
                '4:3' => [
                    'title' => '4:3',
                    'value' => 4 / 3
                ],
            ],
        ],
     ]
];