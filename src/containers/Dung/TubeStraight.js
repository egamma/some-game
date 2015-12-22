import React, { Component } from 'react';
import THREE from 'three.js';

const extrudeSettings = {
    curveSegments: 10,
    amount: 1,
    bevelEnabled: false,
    bevelSegments: 0,
    steps: 10,
    bevelSize: 0,
    closed: false,
    bevelThickness: 0
};

const offset = new THREE.Vector3( 0, 0, -0.5 );

export default class TubeBend extends Component {

    constructor(props, context) {

        super(props, context);

    }

    render() {

        const { position, rotation, scale, materialId } = this.props;

        return <group
            position={ position }
            rotation={ rotation }
            scale={ scale }
        >

            <mesh
                position={ offset }
                ref="mesh"
            >
                <extrudeGeometry
                    settings={ extrudeSettings }
                >
                    <shapeResource
                        resourceId="tubeWall"
                    />
                </extrudeGeometry>
                <materialResource
                    resourceId={ materialId }
                />
            </mesh>

        </group>;

    }

}
