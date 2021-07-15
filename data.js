var APP_DATA = {
  "scenes": [
    {
      "id": "0-the-room",
      "name": "The room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.7624206108359672,
        "pitch": 0.10636296153427693,
        "fov": 1.4678088691727604
      },
      "linkHotspots": [
        {
          "yaw": 3.097984383430317,
          "pitch": 0.15118634558113442,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom",
      "name": "Livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.017988000539528315,
        "pitch": 0.0953467976610689,
        "fov": 1.4678088691727604
      },
      "linkHotspots": [
        {
          "yaw": 2.6656656925321016,
          "pitch": 0.11787579931680447,
          "rotation": 0,
          "target": "0-the-room"
        },
        {
          "yaw": -3.0763399557985025,
          "pitch": 0.08675005326270302,
          "rotation": 0,
          "target": "2-shower"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.645168004511488,
          "pitch": 0.06705180176058434,
          "title": "Balcony",
          "text": "balcony"
        }
      ]
    },
    {
      "id": "2-shower",
      "name": "Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.9624571834941857,
        "pitch": 0.056448959921283404,
        "fov": 1.4678088691727604
      },
      "linkHotspots": [
        {
          "yaw": 2.0029828415437745,
          "pitch": -0.11459898279555247,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Chick Scandinavian",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
