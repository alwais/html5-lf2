"use strict";
var lf2 = (function (lf2) {
    /**
     * @class {Point3D}
     */
    const Point = Framework.Point3D;
    const Utils = lf2.Utils;
    const Body = lf2.Body;
    const Interaction = lf2.Interaction;
    const GameObject = lf2.GameObject;
    const GameObjectPool = lf2.GameObjectPool;
    /**
     * GameItem
     *
     * @type {GameItem}
     * @class lf2.GameItem
     * @implements Framework.AttachableInterface
     */
    lf2.GameItem = class GameItem extends Framework.AttachableInterface {
        /**
         *
         * @param charId ID of character
         */
        constructor(charId) {
            this.obj = GameObjectPool.get(charId);
            this.position = new Point3D(0, 0, 0);

            this._currentFrameIndex = 0;
            this._lastFrameDrawTime = -1;
            this._config = Framework.Config;
            this._frameInterval = (1e3 / this._config.fps);
        }

        /**
         * Get current frame
         * @returns {Frame}
         */
        get currentFrame() {
            return this.frames[this._currentFrameIndex];
        }

        /**
         * Load
         *
         * @override
         */
        load() {
            //TODO: DO NOTHING
        }

        /**
         * Initial this object
         *
         * @override
         */
        initialize() {
            //TODO: OD NOTHING
        }

        /**
         * Update object
         *
         * @override
         */
        update() {
            //TODO: need implement
        }

        /**
         * Draw object
         *
         * @param {CanvasRenderingContext2D} ctx
         *
         * @override
         */
        draw(ctx) {

        }

        _getNextFrameId(){
            let next = this.currentFrame.next;
        }

        get isObjectChanged() {
            //TODO: need implement
            return true;
        }

    };

    return lf2;
})(lf2 || {});