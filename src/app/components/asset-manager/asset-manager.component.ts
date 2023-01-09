import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-manager',
  templateUrl: './asset-manager.component.html',
  styleUrls: ['./asset-manager.component.scss']
})
export class AssetManagerComponent implements OnInit {
  public selectedPoolId: string = '';
  public pools: DeFiPool[] = [];
  public depositAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
    const pool1: DeFiPool = new DeFiPool("stETH", "747c1d2a-c668-4682-b9f9-296708a3dd90", "Lido");
    const pool2: DeFiPool = new DeFiPool("ETH-stETH", "57d30b9c-fc66-4ac2-b666-69ad5f410cce", "Curve");
    const pool3: DeFiPool = new DeFiPool("USDC", "a349fea4-d780-4e16-973e-70ca9b606db2", "AAVE V2");
    const pool4: DeFiPool = new DeFiPool("WBTC", "40e0d8b7-5eba-4d6c-a3c2-9ac375bcd4bf", "AAVE V2");
    const pool5: DeFiPool = new DeFiPool("USDC", "cefa9bb8-c230-459a-a855-3b94e96acd8c", "Compound");

    this.pools.push(pool1);
    this.pools.push(pool2);
    this.pools.push(pool3);
    this.pools.push(pool4);
    this.pools.push(pool5);
  }

  public handleSelectChange($event: any) {
    console.log($event);
    this.selectedPoolId = $event.value;
  }

  public depositUpdated($event: any) {
    console.log($event);
  }

  public deposit() {
    this.connectWeb3();
  }

  public async connectWeb3() {

  }

}

class DeFiPool {
  public token: string;
  public id: string;
  public project: string;
  public network: string = "ETH";

  constructor(token: string, id: string, project: string) {
    this.token = token;
    this.id = id;
    this.project = project;
  }
}