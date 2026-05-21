ItemEvents.tooltip((event) => {

    /*
    event.addAdvanced(
        [
            'minecraft:oak_log',
            'minecraft:oak_sapling',
            'minecraft:oak_leaves',
            'kubejs:lvalloy',
            'kubejs:mvalloy',
            'kubejs:hvalloy',
            'kubejs:evalloy',
            'kubejs:ivalloy',
            'kubejs:luvalloy',
            'kubejs:animated/zpmalloy',
            'kubejs:animated/uvalloy',
            'kubejs:animated/uhvalloy'

        ],
        (item, advanced, text) => {
            text.add(1, Text.red('WARNING: Not learnable in transmutating table!'));
        }
    );
    */

    event.addAdvanced(
        [
            'kubejs:seniron'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('It formed on its own...'));
        }
    );

    event.addAdvanced(
        [
            'kubejs:dewvial'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('This could be useful in a pixelated dungeon...'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:voidcrystal'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Machine modes: Void Crystal, Void Crystal Incubator'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:forgef'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Machine modes: Dwarven Anvil, Dwarven Forge'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:precisionlaserengraver'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('This machine cleans its own air by itself, allowing it to not require Cleanroom to engrave wafers.'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:bacteriabreeder'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Machine modes: Bacteria Breeding, Bacteria Multiplying'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:advancedaeassembler'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('Abilities: Perfect Overclock and Parallel Hatch'));
        }
    );

    const factories = [
        {id: 'gtceu:cube_wiremill', tooltip: 'Machine modes: Wiremill, Bender'},
        {id: 'gtceu:cube_extruder', tooltip: 'Machine modes: Extruder, Cutter'},
        {id: 'gtceu:cube_extractor', tooltip: 'Machine modes: Extractor, Fluid Solidifier'},
        {id: 'gtceu:cube_ore', tooltip: 'Machine modes: Macerator, Ore Washer'},
        {id: 'gtceu:cube_mixer', tooltip: 'Machine modes: Mixer'},
        {id: 'gtceu:cube_assembler', tooltip: 'Machine modes: Assembler, Circuit Assembler'},
        {id: 'gtceu:cube_oreprocesser', tooltip: 'Machine modes: Centrifuge, Electrolyzer'},
    ]

    factories.forEach(tip => {
        event.addAdvanced(
            [
                tip.id
            ],
            (item, advanced, text) => {
                text.add(1, Text.white(tip.tooltip));
            }
    );

    })

    event.addAdvanced(
        [
            'kubejs:dwre'
        ],
        (item, advanced, text) => {
            if(!event.shift){
                text.add(1, Text.white('Right click to open!'));
                text.add(2, Text.white('Hold SHIFT for more info.'));
            } else {
                text.add(1, Text.white('Chances:'));
                text.add(2, Text.yellow('10% Curious Pottery Shard'));
                text.add(3, Text.gray('30% Clay Block'));
                text.add(4, Text.gray('60% Stick'));
            }
        }
    );

    event.addAdvanced(
        [
            'gregecore:manasteel_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('1800K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('15%')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:twilight_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('3600K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('30%')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:desh_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('5400K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('45%')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:malachite_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('7400K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('20%')));
            text.add(3, Text.green('Coil parallels: ').append(Text.yellow('2')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:forgotten_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('9200K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('40%')));
            text.add(3, Text.green('Coil parallels: ').append(Text.yellow('4')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:superelement_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('11000K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('60%')));
            text.add(3, Text.green('Coil parallels: ').append(Text.yellow('8')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:awakened_draconium_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('12000K')));
        }
    );

    event.addAdvanced(
        [
            'kubejs:vileheart'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray("This seems indestructible..."));
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray("You can feel intense pressure from this book, maybe the souls of strong enemies don't fade away that easily..."));
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome1'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray("Ancient alien race left this book behind because they could not comprehend its secrets... maybe you can."));
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome4'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray("This tome is hiding in the subatomic particles of several combined blocks that are pressured together in a star. How it got there is a mystery..."));
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome5'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray("This tome is hiding in the subatomic particles of several combined items that are pressured together in a star. How it got there is a mystery..."));
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome3'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray("The recipe for this book has been in the witch coven for a long time, but none were able to create it. You can be the first person to do it..."));
        }
    );

    event.addAdvanced(
        [
            'gtceu:phase_acid_bucket'
        ],
        (item, advanced, text) => {
            text.add(Text.yellow("Executing phase shift."));
        }
    );

    event.addAdvanced(
        [
            'gtceu:uhv_uhv_parallel_hatch'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Allows to run up to 1024 recipes in parallel.'));
            text.add(2, Text.white('Multiblock Sharing ').append(Text.darkRed('Disabled')));
        }
    );

    //Thank you to these artists:

    event.addAdvanced(
        [
            'kubejs:lvalloy',
            'kubejs:mvalloy',
            'kubejs:hvalloy',
            'kubejs:evalloy',
            'kubejs:ivalloy',
            'kubejs:luvalloy',
            'kubejs:animated/zpmalloy',
            'kubejs:animated/uvalloy',
            'kubejs:animated/uhvalloy',
            'kubejs:heatcoil',
            'kubejs:vanaheimingot',
            'kubejs:supingot',
            'kubejs:mushroomingot',
            'kubejs:cursedin',
            'kubejs:bacterialmatteringot'

        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('Texture made by: ').append(Text.blue('theo_artin')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:manasteel_coil',
            'gregecore:twilight_coil',
            'gregecore:desh_coil',
            'gregecore:malachite_coil',
            'gregecore:forgotten_coil',
            'gregecore:superelement_coil',
            'gregecore:awakened_draconium_coil'
        ],
        (item, advanced, text) => {
            text.add(Text.gray('Texture made by: ').append(Text.lightPurple('eyecats')));
        }
    );

});
