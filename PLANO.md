# Plano de reforma — Haras San Gregório

Objetivo: transformar o site em máquina de **visita gratuita agendada**, pronta para receber tráfego do Google Ads.
Regra: aproveitar o que já está bom (fotos reais, visual escuro/dourado, botões de WhatsApp, formulário) e trocar o que trava a conversão.
Publicação: eu trabalho em uma branch e mostro o resultado; só publico em produção (push na `main` → Cloudflare Pages) com o seu "pode publicar".

## Fase 0 — Decisões e dados (bloqueia a copy)
- [x] 0.1 (Ingleses, perto do Costão Golf)
- [x] 0.2 (salão 50-60; salão+área externa ~80; até ~100 em dia seco; foco em eventos menores)
- [~] 0.3 (10 mesas p/ 80, 80 cadeiras Tramontina Alegra, louça, sinuca, freezers, piscina semi-olímpica, churrasqueira, cozinha; faltam estacionamento, horário-limite, buffet)
- [x] 0.4 (NENHUM preço no site; tudo sob consulta)
- [ ] 0.5 Dias e horários de visita, quem recebe, duração; confirmar que é gratuita e sem compromisso
- [ ] 0.6 Depoimentos reais de noivos/anfitriões (com autorização) e número de eventos já realizados
- [ ] 0.7 Domínio secundário eventosharassangregorio.com: é de vocês? (redirecionar para o principal)
- [ ] 0.8 Google Business Profile: existe, está verificado, quantas avaliações?

## Fase 1 — Base técnica (antes de qualquer anúncio)
- [~] 1.1 (código pronto em `src/lib/tracking.js`; falta o ID do GTM em `VITE_GTM_ID`) Rastreamento: Google Tag Manager + GA4; eventos para clique em WhatsApp, envio do formulário, clique em telefone e clique em "Agendar visita"
- [x] 1.2 (feito e testado) Mensagem do WhatsApp com texto inicial identificando origem (página + botão) e UTM/gclid guardados
- [x] 1.3 (17,6 MB → ~1,5 MB no celular / ~3 MB no desktop; foto de capa imediata) Vídeo do topo: imagem de capa imediata, vídeo comprimido (alvo abaixo de 3 MB) e carregado só depois, sem carregar em dados móveis lentos
- [ ] 1.4 (fazer depois de fechar as páginas, na Fase 2) Pré-renderizar as páginas (HTML pronto para o Google e para redes sociais)
- [ ] 1.5 (junto com 1.4) robots.txt e sitemap.xml reais, URL canônica, dados estruturados (EventVenue / LocalBusiness), favicon e og:image por página
- [ ] 1.6 Redirecionar domínio secundário (se for de vocês)
- [ ] 1.7 Medir base: PageSpeed mobile antes/depois

## Fase 2 — Arquitetura e copy que vende
- [~] 2.1 (só a Home por enquanto; páginas /casamentos, /festas e /eventos-corporativos ficam para a próxima rodada) Estrutura de páginas: Home + /casamentos + /festas (aniversário, 15 anos, formatura) + /eventos-corporativos + /visita
- [x] 2.2 Nova promessa do topo (H1 com palavra-chave + benefício + prova) e prova de exclusividade
- [ ] 2.3 Copy de casamento: ciclo de decisão, objeções (chuva, distância, quem monta), mini wedding, pôr do sol
- [ ] 2.4 Copy de festas sociais e corporativo (curta, objetiva)
- [x] 2.5 (estacionamento e área infantil removidos: não confirmados) Seção "Estrutura" (piscina semi-olímpica, salão, churrasqueira, cozinha completa, áreas verdes). O componente existe em `src/sections/Structure.tsx` mas **não é usado** no `App.jsx`
- [x] 2.6 "Como funciona a visita": 3 passos, gratuita, sem compromisso, com horário marcado
- [ ] 2.7 Prova social: depoimentos reais + selo das avaliações do Google; trocar as 3 frases curtas atuais
- [~] 2.8 (feito com as 6 respostas confirmadas; faltam buffet/decoração externa, estacionamento e horário-limite) FAQ (data, capacidade, buffet, chuva, estacionamento, sinal de reserva) com dados estruturados
- [x] 2.9 (endereço no rodapé; CONFIRMAR o endereço) Chamada final e rodapé com endereço/região, horário e contato

## Fase 3 — Design e conversão
- [~] 3.1 (contraste no topo revisado; revisar o resto) Manter a identidade (escuro + dourado, tipografia serifada); corrigir contraste do texto sobre foto no celular
- [x] 3.2 (campo de tipo de evento; falta escolha de dia/horário) Formulário curto de visita (nome, WhatsApp, tipo de evento, data aproximada, convidados) com escolha de dia/horário
- [ ] 3.3 Barra de ação fixa no celular ("Agendar visita gratuita")
- [ ] 3.4 Galeria por tipo de evento; fotos com nomes/alt descritivos
- [ ] 3.5 Teste de botões, layout em 375 px, 768 px e desktop; acessibilidade básica

## Fase 4 — Publicação e verificação
- [ ] 4.1 Revisão final com você (preview)
- [ ] 4.2 Publicar em produção e conferir tags disparando no Tag Assistant
- [ ] 4.3 Enviar sitemap no Search Console

## Fase 5 — Campanhas (com a conta destravada)
- [ ] 5.1 Criar a NOVA conta Google Ads (a antiga está bloqueada)
- [ ] 5.2 Estrutura: Pesquisa de casamento (marca, genérica e cauda longa), festas, corporativo; negativas (ex.: "salão para 300 pessoas", "aluguel de vestido", "gratuito")
- [ ] 5.3 Anúncios responsivos com a copy do site; extensões (chamada, local, textos destacados)
- [ ] 5.4 Segmentação geográfica, orçamento e calendário sazonal (busca de casamento 12–18 meses antes do evento)
- [ ] 5.5 Conversão importada (visita agendada) e revisão semanal dos termos de pesquisa
- [ ] 5.6 Analisar campanhas antigas quando você passar

## Ajustes pedidos em 21/09 (rodada 2)
- [x] A. Vídeo do topo: era vertical (1080x1920) esticado em tela larga. Agora só toca em tela em pé (celular); em tela larga usa foto com movimento leve
- [x] B. Vídeo horizontal de drone real (recorte do clipe DJI) no topo do desktop; vídeo vertical do mesmo drone no celular
- [x] C. Removido o limite de convidados (topo, meta, FAQ, cartões)
- [x] D. Títulos: fonte trocada para Playfair Display, tamanhos menores, sem sombra pesada
- [x] E. Foto da cadeira/mesa: descartada a pedido do cliente, não entra no site
- [x] F. 19 fotos profissionais do espaço (salão, piscina, jardins, sinuca, churrasqueira) integradas no site
- [x] G. Avaliações do Google: 4,9 (37), 6 depoimentos reais aplicados no site
- [ ] H. Telefone do Google (48) 99946-3810 x telefone do site (48) 99672-9976: confirmar qual é o certo
- [ ] I. Ponto de atenção em avaliação: "a entrada" (acesso). Tratar em "Como chegar"

## Ajustes pedidos em 22/09 (rodada 3)
- [x] J. "Salão dos Arcos" era um nome ruim/sem sentido; renomeado para "Salão Principal" (card da Estrutura e legenda da Galeria). A outra foto que já usava "Salão principal" (hall de entrada com escadaria) virou "Hall de entrada" para não duplicar o nome
- [x] K. Título do topo "em um haras no meio do verde" não vendia; trocado para "com a exclusividade de um haras", mantendo "Casamentos e festas" na primeira linha

## Varredura completa do Drive em 22/09
- [x] L. Vasculhadas as 4 pastas com estrela até o fim: **drone** (50 clipes, já usados), **HARAS** (47 fotos, já usadas), **Eventos haras imagens e videos** (51 itens: cavalos, churrasqueira acesa, book de casamentos — já espelha o que tinha no Desktop), **Haras** (raiz com subpastas Logos e "valentino faz 1ano/highlights", 103 fotos da Festa Limão Siciliano já representada por 12 fotos no site)
- [x] M. Logo oficial encontrado (pasta Logos): brasão com cavalo dourado + "EVENTOS HARAS SAN GREGÓRIO", em PNG e SVG. O favicon genérico (um "H" gerado) foi trocado pelo SVG do cavalo
- [x] N. Foto real de um cavalo do haras (criança fazendo carinho) adicionada à Galeria — reforça a identidade "haras" que agora está no título do site
- [x] O. Churrasqueira: trocada a foto fria (vazia, de dia) por uma com o fogo aceso, usada no card "Confraternizações" e na Galeria
- Nenhuma pasta do Drive ficou sem visitar. Encerrado.
