// @ts-nocheck
import * as THREE from 'three';
import EventEmitter from './Utils/EventEmitter';
import Loader from './Utils/Loader';

export default class Resources extends EventEmitter {
  constructor() {
    super()

    this.items = {}
    this.loader = new Loader();

    this.loader.load([
      // Matcaps
      { name: 'matcapBeige', source: '../../static/models/matcaps/beige.png', type: 'texture' },
      { name: 'matcapBlack', source: '../../static/models/matcaps/black.png', type: 'texture' },
      { name: 'matcapOrange', source: '../../static/models/matcaps/orange.png', type: 'texture' },
      { name: 'matcapRed', source: '../../static/models/matcaps/red.png', type: 'texture' },
      { name: 'matcapWhite', source: '../../static/models/matcaps/white.png', type: 'texture' },
      { name: 'matcapGreen', source: '../../static/models/matcaps/green.png', type: 'texture' },
      { name: 'matcapBrown', source: '../../static/models/matcaps/brown.png', type: 'texture' },
      { name: 'matcapGray', source: '../../static/models/matcaps/gray.png', type: 'texture' },
      { name: 'matcapEmeraldGreen', source: '../../static/models/matcaps/emeraldGreen.png', type: 'texture' },
      { name: 'matcapPurple', source: '../../static/models/matcaps/purple.png', type: 'texture' },
      { name: 'matcapBlue', source: '../../static/models/matcaps/blue.png', type: 'texture' },
      { name: 'matcapYellow', source: '../../static/models/matcaps/yellow.png', type: 'texture' },
      { name: 'matcapMetal', source: '../../static/models/matcaps/metal.png', type: 'texture' },
      // { name: 'matcapGold', source: './models/matcaps/gold.png', type: 'texture' },

      // Intro
      { name: 'introStaticBase', source: '../../static/models/intro/static/base.glb', type: 'glb' },
      { name: 'introStaticCollision', source: '../../static/models/intro/static/collision.glb', type: 'glb' },
      { name: 'introStaticFloorShadow', source: '../../static/models/intro/static/floorShadow.png', type: 'texture' },

      { name: 'introInstructionsLabels', source: '../../static/models/intro/instructions/labels.glb', type: 'glb' },
      { name: 'introInstructionsArrows', source: '../../static/models/intro/instructions/arrows.png', type: 'texture' },
      { name: 'introInstructionsControls', source: '../../static/models/intro/instructions/controls.png', type: 'texture' },
      { name: 'introInstructionsOther', source: '../../static/models/intro/instructions/other.png', type: 'texture' },

      { name: 'introArrowKeyBase', source: '../../static/models/intro/arrowKey/base.glb', type: 'glb' },
      { name: 'introArrowKeyCollision', source: '../../static/models/intro/arrowKey/collision.glb', type: 'glb' },

      { name: 'introBBase', source: '../../static/models/intro/b/base.glb', type: 'glb' },
      { name: 'introBCollision', source: '../../static/models/intro/b/collision.glb', type: 'glb' },

      { name: 'introRBase', source: '../../static/models/intro/r/base.glb', type: 'glb' },
      { name: 'introRCollision', source: '../../static/models/intro/r/collision.glb', type: 'glb' },

      { name: 'introUBase', source: '../../static/models/intro/u/base.glb', type: 'glb' },
      { name: 'introUCollision', source: '../../static/models/intro/u/collision.glb', type: 'glb' },

      { name: 'introNBase', source: '../../static/models/intro/n/base.glb', type: 'glb' },
      { name: 'introNCollision', source: '../../static/models/intro/n/collision.glb', type: 'glb' },

      { name: 'introOBase', source: '../../static/models/intro/o/base.glb', type: 'glb' },
      { name: 'introOCollision', source: '../../static/models/intro/o/collision.glb', type: 'glb' },

      { name: 'introSBase', source: '../../static/models/intro/s/base.glb', type: 'glb' },
      { name: 'introSCollision', source: '../../static/models/intro/s/collision.glb', type: 'glb' },

      { name: 'introIBase', source: '../../static/models/intro/i/base.glb', type: 'glb' },
      { name: 'introICollision', source: '../../static/models/intro/i/collision.glb', type: 'glb' },

      { name: 'introMBase', source: '../../static/models/intro/m/base.glb', type: 'glb' },
      { name: 'introMCollision', source: '../../static/models/intro/m/collision.glb', type: 'glb' },

      { name: 'introCreativeBase', source: '../../static/models/intro/creative/base.glb', type: 'glb' },
      { name: 'introCreativeCollision', source: '../../static/models/intro/creative/collision.glb', type: 'glb' },

      { name: 'introDevBase', source: '../../static/models/intro/dev/base.glb', type: 'glb' },
      { name: 'introDevCollision', source: '../../static/models/intro/dev/collision.glb', type: 'glb' },

      // Intro
      { name: 'crossroadsStaticBase', source: '../../static/models/crossroads/static/base.glb', type: 'glb' },
      { name: 'crossroadsStaticCollision', source: '../../static/models/crossroads/static/collision.glb', type: 'glb' },
      { name: 'crossroadsStaticFloorShadow', source: '../../static/models/crossroads/static/floorShadow.png', type: 'texture' },

      // Car default
      { name: 'carDefaultChassis', source: '../../static/models/car/default/chassis.glb', type: 'glb' },
      { name: 'carDefaultWheel', source: '../../static/models/car/default/wheel.glb', type: 'glb' },
      { name: 'carDefaultBackLightsBrake', source: '../../static/models/car/default/backLightsBrake.glb', type: 'glb' },
      { name: 'carDefaultBackLightsReverse', source: '../../static/models/car/default/backLightsReverse.glb', type: 'glb' },
      { name: 'carDefaultAntena', source: '../../static/models/car/default/antena.glb', type: 'glb' },
      // { name: 'carDefaultBunnyEarLeft', source: './models/car/default/bunnyEarLeft.glb' },
      // { name: 'carDefaultBunnyEarRight', source: './models/car/default/bunnyEarRight.glb' },

      // Car default
      { name: 'carCyberTruckChassis', source: '../../static/models/car/cyberTruck/chassis.glb', type: 'glb' },
      { name: 'carCyberTruckWheel', source: '../../static/models/car/cyberTruck/wheel.glb', type: 'glb' },
      { name: 'carCyberTruckBackLightsBrake', source: '../../static/models/car/cyberTruck/backLightsBrake.glb', type: 'glb' },
      { name: 'carCyberTruckBackLightsReverse', source: '../../static/models/car/cyberTruck/backLightsReverse.glb', type: 'glb' },
      { name: 'carCyberTruckAntena', source: '../../static/models/car/cyberTruck/antena.glb', type: 'glb' },

      // Project
      { name: 'projectsBoardStructure', source: '../../static/models/projects/board/structure.glb', type: 'glb' },
      { name: 'projectsBoardCollision', source: '../../static/models/projects/board/collision.glb', type: 'glb' },
      { name: 'projectsBoardStructureFloorShadow', source: '../../static/models/projects/board/floorShadow.png', type: 'texture' },
      { name: 'projectsBoardPlane', source: '../../static/models/projects/board/plane.glb', type: 'glb' },

      { name: 'projectsDistinctionsAwwwardsBase', source: '../../static/models/projects/distinctions/awwwards/base.glb', type: 'glb' },
      { name: 'projectsDistinctionsAwwwardsCollision', source: '../../static/models/projects/distinctions/awwwards/collision.glb', type: 'glb' },
      { name: 'projectsDistinctionsFWABase', source: '../../static/models/projects/distinctions/fwa/base.glb', type: 'glb' },
      { name: 'projectsDistinctionsFWACollision', source: '../../static/models/projects/distinctions/fwa/collision.glb', type: 'glb' },
      { name: 'projectsDistinctionsCSSDABase', source: '../../static/models/projects/distinctions/cssda/base.glb', type: 'glb' },
      { name: 'projectsDistinctionsCSSDACollision', source: '../../static/models/projects/distinctions/cssda/collision.glb', type: 'glb' },

      { name: 'projectsLuniFloor', source: '../../static/models/projects/luni/floorTexture.webp', type: 'texture' },
      { name: 'projectsBonhomme10ansFloor', source: '../../static/models/projects/bonhomme10ans/floorTexture.webp', type: 'texture' },
      { name: 'projectsThreejsJourneyFloor', source: '../../static/models/projects/threejsJourney/floorTexture.webp', type: 'texture' },
      { name: 'projectsMadboxFloor', source: '../../static/models/projects/madbox/floorTexture.png', type: 'texture' },
      { name: 'projectsScoutFloor', source: '../../static/models/projects/scout/floorTexture.png', type: 'texture' },
      { name: 'projectsChartogneFloor', source: '../../static/models/projects/chartogne/floorTexture.png', type: 'texture' },
      // { name: 'projectsZenlyFloor', source: './models/projects/zenly/floorTexture.png', type: 'texture' },
      { name: 'projectsCitrixRedbullFloor', source: '../../static/models/projects/citrixRedbull/floorTexture.png', type: 'texture' },
      { name: 'projectsPriorHoldingsFloor', source: '../../static/models/projects/priorHoldings/floorTexture.png', type: 'texture' },
      { name: 'projectsOranoFloor', source: '../../static/models/projects/orano/floorTexture.png', type: 'texture' },
      // { name: 'projectsGleecChatFloor', source: './models/projects/gleecChat/floorTexture.png', type: 'texture' },
      // { name: 'projectsKepplerFloor', source: './models/projects/keppler/floorTexture.png', type: 'texture' },

      // Information
      { name: 'informationStaticBase', source: '../../static/models/information/static/base.glb', type: 'glb' },
      { name: 'informationStaticCollision', source: '../../static/models/information/static/collision.glb', type: 'glb' },
      { name: 'informationStaticFloorShadow', source: '../../static/models/information/static/floorShadow.png', type: 'texture' },

      { name: 'informationBaguetteBase', source: '../../static/models/information/baguette/base.glb', type: 'glb' },
      { name: 'informationBaguetteCollision', source: '../../static/models/information/baguette/collision.glb', type: 'glb' },

      { name: 'informationContactTwitterLabel', source: '../../static/models/information/static/contactTwitterLabel.png', type: 'texture' },
      { name: 'informationContactGithubLabel', source: '../../static/models/information/static/contactGithubLabel.png', type: 'texture' },
      { name: 'informationContactLinkedinLabel', source: '../../static/models/information/static/contactLinkedinLabel.png', type: 'texture' },
      { name: 'informationContactMailLabel', source: '../../static/models/information/static/contactMailLabel.png', type: 'texture' },

      { name: 'informationActivities', source: '../../static/models/information/static/activities.png', type: 'texture' },

      // Playground
      { name: 'playgroundStaticBase', source: '../../static/models/playground/static/base.glb', type: 'glb' },
      { name: 'playgroundStaticCollision', source: '../../static/models/playground/static/collision.glb', type: 'glb' },
      { name: 'playgroundStaticFloorShadow', source: '../../static/models/playground/static/floorShadow.png', type: 'texture' },

      // Brick
      { name: 'brickBase', source: '../../static/models/brick/base.glb', type: 'glb' },
      { name: 'brickCollision', source: '../../static/models/brick/collision.glb', type: 'glb' },

      // Horn
      { name: 'hornBase', source: '../../static/models/horn/base.glb', type: 'glb' },
      { name: 'hornCollision', source: '../../static/models/horn/collision.glb', type: 'glb' },

      // // Distinction A
      // { name: 'distinctionAStaticBase', source: './models/distinctionA/static/base.glb' },
      // { name: 'distinctionAStaticCollision', source: './models/distinctionA/static/collision.glb' },
      // { name: 'distinctionAStaticFloorShadow', source: './models/distinctionA/static/floorShadow.png', type: 'texture' },

      // // Distinction B
      // { name: 'distinctionBStaticBase', source: './models/distinctionB/static/base.glb' },
      // { name: 'distinctionBStaticCollision', source: './models/distinctionB/static/collision.glb' },
      // { name: 'distinctionBStaticFloorShadow', source: './models/distinctionB/static/floorShadow.png', type: 'texture' },

      // // Distinction C
      // { name: 'distinctionCStaticBase', source: './models/distinctionC/static/base.glb' },
      // { name: 'distinctionCStaticCollision', source: './models/distinctionC/static/collision.glb' },
      // { name: 'distinctionCStaticFloorShadow', source: './models/distinctionC/static/floorShadow.png', type: 'texture' },

      // // Cone
      // { name: 'coneBase', source: './models/cone/base.glb' },
      // { name: 'coneCollision', source: './models/cone/collision.glb' },

      // // Awwwards trophy
      // { name: 'awwwardsTrophyBase', source: './models/awwwardsTrophy/base.glb' },
      // { name: 'awwwardsTrophyCollision', source: './models/awwwardsTrophy/collision.glb' },

      // Webby trophy
      { name: 'webbyTrophyBase', source: '../../static/models/webbyTrophy/base.glb', type: 'glb' },
      { name: 'webbyTrophyCollision', source: '../../static/models/webbyTrophy/collision.glb', type: 'glb' },

      // Lemon
      { name: 'lemonBase', source: '../../static/models/lemon/base.glb', type: 'glb' },
      { name: 'lemonCollision', source: '../../static/models/lemon/collision.glb', type: 'glb' },

      // Bownling ball
      { name: 'bowlingBallBase', source: '../../static/models/bowlingBall/base.glb', type: 'glb' },
      { name: 'bowlingBallCollision', source: '../../static/models/bowlingBall/collision.glb', type: 'glb' },

      // Bownling ball
      { name: 'bowlingPinBase', source: '../../static/models/bowlingPin/base.glb', type: 'glb' },
      { name: 'bowlingPinCollision', source: '../../static/models/bowlingPin/collision.glb', type: 'glb' },

      // Areas
      { name: 'areaKeyEnter', source: '../../static/models/area/keyEnter.png', type: 'texture' },
      { name: 'areaEnter', source: '../../static/models/area/enter.png', type: 'texture' },
      { name: 'areaOpen', source: '../../static/models/area/open.png', type: 'texture' },
      { name: 'areaReset', source: '../../static/models/area/reset.png', type: 'texture' },
      { name: 'areaQuestionMark', source: '../../static/models/area/questionMark.png', type: 'texture' },

      // Tiles
      { name: 'tilesABase', source: '../../static/models/tiles/a/base.glb', type: 'glb' },
      { name: 'tilesACollision', source: '../../static/models/tiles/a/collision.glb', type: 'glb' },

      { name: 'tilesBBase', source: '../../static/models/tiles/b/base.glb', type: 'glb' },
      { name: 'tilesBCollision', source: '../../static/models/tiles/b/collision.glb', type: 'glb' },

      { name: 'tilesCBase', source: '../../static/models/tiles/c/base.glb', type: 'glb' },
      { name: 'tilesCCollision', source: '../../static/models/tiles/c/collision.glb', type: 'glb' },

      { name: 'tilesDBase', source: '../../static/models/tiles/d/base.glb', type: 'glb' },
      { name: 'tilesDCollision', source: '../../static/models/tiles/d/collision.glb', type: 'glb' },

      { name: 'tilesEBase', source: '../../static/models/tiles/e/base.glb', type: 'glb' },
      { name: 'tilesECollision', source: '../../static/models/tiles/e/collision.glb', type: 'glb' },

      // Konami
      { name: 'konamiLabel', source: '../../static/models/konami/label.png', type: 'texture' },
      { name: 'konamiLabelTouch', source: '../../static/models/konami/label-touch.png', type: 'texture' },

      // Wigs
      { name: 'wig1', source: '../../static/models/wigs/wig1.glb', type: 'glb' },
      { name: 'wig2', source: '../../static/models/wigs/wig2.glb', type: 'glb' },
      { name: 'wig3', source: '../../static/models/wigs/wig3.glb', type: 'glb' },
      { name: 'wig4', source: '../../static/models/wigs/wig4.glb', type: 'glb' },

      // // Egg
      // { name: 'eggBase', source: './models/egg/base.glb' },
      // { name: 'eggCollision', source: './models/egg/collision.glb' },
    ])

    this.loader.on('fileEnd', (_resource, _data) => {
      this.items[_resource.name] = _data

      // Texture
      if (_resource.type === 'texture') {
        const texture = new THREE.Texture(_data)
        texture.needsUpdate = true

        this.items[`${_resource.name}Texture`] = texture
      }

      // Trigger progress
      this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
    })

    this.loader.on('end', () => {
      // Trigger ready
      this.trigger('ready')
    })
  }
}