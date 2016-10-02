<?php
/**
 * Created by PhpStorm.
 * Author: popstarfreas (https://dark-gaming.com/profile/popstarfreas)
 * Date: 26/12/14
 * Time: 20:48
 */
if(!defined('index')) exit;

// Include array of the IDs for items
include_once 'items_array.php';

$body = "";
$player['items'] = explode(', ', $player['info']['inventory'].", ".$player['info']['armor'].", ".$player['info']['dyes']);

$i = 0;
foreach ($player['items'] as $item) {
    $itemInfo = explode(':', $item);
    if ($i >= 59 && $i < 75 && $itemInfo[0] !== "0") {
        $item_name2 = str_replace(' ', '_', $itemInfo[0] > 0 ? $itemIDs[$itemInfo[0]] : $itemNIDs[$itemInfo[0]]) . '.png';
        $img_tag = '<img title="' . substr($item_name2, 0, -4) . '" src="items_images/' . $item_name2 . '"/>';
    } else {
        if ($itemInfo[0] !== "0") {
            $item_name2 = str_replace(" ", "_", $itemInfo[0]) . ".png";
            $img_tag = '<img title="' . $itemInfo[0] . '" src="items_images/' . $item_name2 . '"/>';
        } else {
            $item_name2 = "";
        }
    }
    if ($i == 0) {
        $body .= '<p id="title">Inventory</p>' . "\n\n";
        $body .= '<table id="inv_table"><tr>';
    }

    // For each slot in inventory with total 50 slots making up 10 columns and 5 rows
    // This is shorter than the previous 'if' used so I decided to use it instead of $i == 10 || $i == 20 etc.
    // The < 50 represents the max slots in inventory
    if ($i % 10 === 0 && $i < 50) {
        $body .= '</tr><tr>';
    }

    // Check to see if we're now onto Coins or Ammo slots
    // Check for first Coin slot
    if ($i === 50) {
        $body .= '</tr></table>' . "\n\n" . '<div id="Coins_table">';
        $body .= '<span id="Coins">Coins</span><table><tr>';
    }

    // Check for first Ammo slot
    if ($i === 54) {
        $body .= '</table></div><div id="Ammo_table">';
        $body .= '<span id="Ammo">Ammo</span><table><tr>';
    }

    // Check to see if we're inside Coins or Ammo tables
    if ($i > 50 && $i < 58) {
        $body .= '</tr><tr>';
    }

    // Check to see if we're on the last "table"
    if($i === 59) {
        $body .= '</table></div><div class="stuff_table stuff_tableFix">';
        $body .= '<span id="Armor">Equip</span><table><tr>';
    }

    if($i === 67 || $i === 75) {
        $body .= '</tr></table></div>'."\n\n".'<div class="stuff_table'.($i === 75 ? ' stuff_tableL' : NULL).'">';
        $body .= '<span id="'.($i === 67 ? 'Vanity' : 'Dye').'">'.($i === 67 ? 'Social' : 'Dye').'</span><table><tr>';
    }

    // The last table has only 1 row per table so we close the current row
    // and open a new one here.
    if($i > 59) {
        $body .= '</tr><tr>';
    }


    if ($itemInfo[0] == "" || $item_name2 == "") {
        if ($i === 58) {
        } else {
            $body .= '<td><div class="item"><div class="item2"><span class="empty"></span></div>';
            if ($i < 10) {
                $body .= '<div class="num2">' . ($i < 9 ? $i + 1 : 0) . '</div>';
            }
            $body .= '</div></td>';
        }
    } else {
        // Output data with item
        $body .= '<td><div class="item"></div><div class="item2"><div class="img">' . $img_tag . '</div>';
        if ($i < 10) {
            $body .= '<div class="num2">' . ($i < 9 ? $i + 1 : 0) . '</div>';
        }
        $body .= '</div>';
        if ($i < 59 && $itemInfo[1] > 1) {
            $body .= '<span class="num">' . $itemInfo[1] . '</span>';
        }
        $body .= "</td>\n";
    }
    $i++;
}
$body .= '</tr></table></div>';

$body .= '<div id="Buffs">Buffs</div><div id="Buff_table">';

// Display buffs
$buffs = explode(', ', $player['info']['buffs']);
$i = 0;
foreach($buffs as $buff) {
    if($buff > 0) {
        $body .= '<div class="buffImg"><img src="items_images/Buff_'.$buff.'.png" /></div>';
        $i++;
    }
}
$body .= '</div>';

// Display Player Position
if ($config['display_position'])
$body .= '<div id="Position">Position: <em>'.$player['info']['position'].'</em></div>';

// Display Player Group
if ($config['display_group'])
    $body .= '<div id="Group">Group: <em>' . $player['info']['group'] . '</em></div>';

// Display IP
if ($config['display_ip'])
    $body .= '<div id="UserIP">IP: <em>' . $player['info']['ip'] . '</em></div>';

$body .= '<a id="return" href="?">Go back</a>';

// HTML
?>

<!DOCTYPE html>
<html>
<head profile="http://www.w3.org/2005/10/profile">
    <link rel="icon"
          type="image/png"
          href="favicon.png">
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic' rel='stylesheet' type='text/css'/>
    <link rel="stylesheet" href="styles.css" type="text/css"/>
    <title>T-Inv</title>
</head>
<body style="background: url('<?php echo $defaultBG; ?>'); width: 100%;">
<?php echo $body; ?>
</body>
</html>
