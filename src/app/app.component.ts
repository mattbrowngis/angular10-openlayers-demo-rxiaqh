import { Component, VERSION, AfterViewInit } from "@angular/core";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import Transform from "ol/proj";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  map: Map;

  constructor() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [-10954433,3449584],
        zoom: 16
      })
    });
  }

  ngAfterViewInit() {
    this.map.setTarget("map");
  }
}
