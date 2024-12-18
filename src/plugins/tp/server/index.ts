import { useRebar } from '@Server/index.js'
import * as alt from 'alt-server'

const Rebar = useRebar();
const Messenger = Rebar.messenger.useMessenger();

Messenger.commands.register({
    name: 'tpwp',
    desc: 'Teleport to waypoint',
    callback: async (player: alt.Player) => {
        const notify = await Rebar.player.useNotify(player)
        try{

        
        const pos = await Rebar.player.useWaypoint(player).get()
        
        if(!pos){
           
            return notify.showNotification('no waypoint selected');
        }
        const teleportPos = {
            x: pos.x,
            y: pos.y,
            z: pos.z + 1,
        }
        player.pos = teleportPos

        return notify.showNotification('teleported to waypoint')
    } catch (error) {
        console.error('teleport error:', error)
        return notify.showNotification('failed to teleport')
    }
    }
})

Messenger.commands.register({
    name: 'tp',
    desc: 'Teleport to player id',
    callback: async (player: alt.Player, targetid: string) => {
        const notify = Rebar.player.useNotify(player)
        try{
            const targetplayerid = parseInt(targetid)
            const targetplayer = alt.Player.all.find(p => p.id === targetplayerid)
            
            if(!targetplayer || !targetplayer.valid){
                return notify.showNotification(`${targetplayerid} not found`)
            }

            const teleportPos = {
                x: targetplayer.pos.x,
                y: targetplayer.pos.y,
                z: targetplayer.pos.z + 1,
            }
            player.pos = teleportPos
        } catch (err) {
            console.error('teleport error:', err)
            return notify.showNotification('failed to teleport')
        }
    }
})
