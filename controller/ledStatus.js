import { LedStatus } from "../models/ledStatus.js";

async function getAll(req, res) {
    try {
        let leds = await LedStatus.find()
        res.status(200).json({accion: 'get one', datos: leds})
    } catch (err) {
        res.status(500).json({accion: 'get one', mensaje: 'Error al obtener los leds'})
    }
}

async function getById(req, res) {
    let id = req.params.id
    try {
        let leds = await LedStatus.findById(id)
        res.status(200).json({accion: 'get one', datos: leds})
    } catch (err) {
        res.status(500).json({accion: 'get one', mensaje: 'Error al obtener los leds'})
    }
}

async function insert(req, res) {
    const led = new LedStatus(req.body)
    try {
        let ledSave = await led.save()
        res.status(200).json({accion: 'save', datos: ledSave})
    } catch (err) {
        res.status(500).json({accion: 'save', mensaje: 'Error al guardar el led'})
    }
}

async function update (req,res){
    var data = req.body;
    let id = req.params.id;

    try{
        let ledActualizado = await LedStatus.findByIdAndUpdate(id, data);
        res.status(200).json({accion:'update', datos: ledActualizado}) 
    }catch(err){
        res.status(500).json({accion:'update', mensaje:'error al actualizar el usuario'}) 
    }
}


export { getAll, getById, insert, update }