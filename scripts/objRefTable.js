const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Fade,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Flash,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Preload,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.Stop,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Sin.Acts.SetMagnitude,
		C3.Plugins.System.Exps.choose,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetEnabled
	];
};
self.C3_JsPropNameTable = [
	{Esmaecer: 0},
	{Capa: 0},
	{BotaoPlay: 0},
	{Faixa: 0},
	{Mouse: 0},
	{Cenario: 0},
	{Sólido: 0},
	{BlocoPiso01: 0},
	{Senóide: 0},
	{BlocoSuspenso01: 0},
	{vidas: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{Piscar: 0},
	{Tonico: 0},
	{Teclado: 0},
	{Moeda: 0},
	{Áudio: 0},
	{Espinhos: 0},
	{Vidas: 0},
	{TxtMoedas: 0},
	{Projétil: 0},
	{DestruirForaDoLayout: 0},
	{Fantasma: 0},
	{Morcego: 0},
	{GameOver: 0},
	{YouWin: 0},
	{Mumia: 0},
	{Piramide: 0},
	{CenarioPiramide: 0},
	{OutraMumia: 0},
	{Alavanca: 0},
	{Ponte: 0},
	{zumbi: 0},
	{Pum: 0},
	{Bandeira: 0},
	{pontos: 0}
];

self.InstanceType = {
	Capa: class extends self.ITiledBackgroundInstance {},
	BotaoPlay: class extends self.ISpriteInstance {},
	Faixa: class extends self.ITiledBackgroundInstance {},
	Mouse: class extends self.IInstance {},
	Cenario: class extends self.ITiledBackgroundInstance {},
	BlocoPiso01: class extends self.ITiledBackgroundInstance {},
	BlocoSuspenso01: class extends self.ITiledBackgroundInstance {},
	Tonico: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Espinhos: class extends self.ITiledBackgroundInstance {},
	Vidas: class extends self.ISpriteInstance {},
	TxtMoedas: class extends self.ITextInstance {},
	Fantasma: class extends self.ISpriteInstance {},
	Morcego: class extends self.ISpriteInstance {},
	GameOver: class extends self.ITiledBackgroundInstance {},
	YouWin: class extends self.ITiledBackgroundInstance {},
	Mumia: class extends self.ISpriteInstance {},
	Piramide: class extends self.ISpriteInstance {},
	CenarioPiramide: class extends self.ITiledBackgroundInstance {},
	OutraMumia: class extends self.ISpriteInstance {},
	Alavanca: class extends self.ISpriteInstance {},
	Ponte: class extends self.ITiledBackgroundInstance {},
	zumbi: class extends self.ISpriteInstance {},
	Pum: class extends self.ISpriteInstance {},
	Bandeira: class extends self.ISpriteInstance {}
}