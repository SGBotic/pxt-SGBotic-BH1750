/**
* Makecode block for BH1750 Wide Angle Ambient Light Sensor

*/

namespace SGBotic {

    let i2cAddr: number // 0x3F or 0x27
    let ONE_TIME_HIGH_RES_MODE = 0x20
    let BH1750_CONV_FACTOR = 1.2
    
    export enum I2C_ADDR{
        //%block="35"
        addr1 = 35,  //0x23
        //%block="92"
        addr2 = 92  //0x5C
    }
   
 
    /**
    * Configure BH1750 and set the I2C address
    * @param Select I2C address
    */
    //% subcategory=BH1750
    //% blockId="BH1750_INIT" block="Initialize BH1750 at address %addr"
    //% weight=100 blockGap=8
    export function initBH1750(addr:I2C_ADDR)
    {
        i2cAddr = addr
        
        //one time high resolution mode, 0.5 lux resolution, 120ms
        //pins.i2cWriteNumber(i2cAddr, 0x20, NumberFormat.UInt8BE)
        //basic.pause(10)
    }
    
    /**
     * Read ambient light
     */
    //% subcategory=BH1750
    //% blockId="Ambient_getLux" block="lux"
    //% weight=100 blockGap=15 
    export function readLux(): number {
        
        pins.i2cWriteNumber(i2cAddr, ONE_TIME_HIGH_RES_MODE, NumberFormat.UInt8BE)
        basic.pause(200)
        let readbuf = pins.i2cReadBuffer(i2cAddr, pins.sizeOf(NumberFormat.UInt8LE) * 2)
        
        let luminance = readbuf[0]
        luminance = luminance <<8
        luminance = luminance |= readbuf[1]
        luminance /= BH1750_CONV_FACTOR
        return (Math.round(luminance*10))
    }
}