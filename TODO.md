# TODO.md — Projeto Mako® Soluções Industriais

## 📅 Atualizado em: 26/03/2026

---

## ✅ Progresso Concluído

### Home Page
- [x] HeroSection com carrossel
- [x] CompanyStatsSection
- [x] CompanyValuesSection
- [x] AnimatedClientsSection (logos animados)

### Página Clientes
- [x] ClientsGridSection (grid honeycomb de logos)
- [x] BrazilMapSection (mapa do Brasil com estados coloridos)
- [x] Layout side-by-side (desfeito por solicitação do usuário)

### Certificações
- [x] CertificationsSection atualizado com novo layout
- [x] Imagens lado a lado com placeholders
- [x] Descrição do ISO 9001:2015 da ABNT
- [x] Validade removida dos cards
- [x] Diretório `public/images/certifications/` criado

### Documentação
- [x] COORP.md atualizado com seção de certificações
- [x] NRs removidas do documento (não possuem)
- [x] ISO 9001:2015 corrigido para ABNT
- [x] Validade atualizada: 25/11/2022 a 25/11/2025

---

## 🔄 Em Andamento

### Certificações
- [ ] Substituir placeholders por imagens reais dos certificados
  - Local: `public/images/certifications/`
  - Imagens necessárias:
    - Certificado ISO 9001:2015
    - Certificação ABNT

---

## 📋 Pendente

###巴西 Map Section
- [ ] Ajustar posicionamento dos marcadores (se for recolocar)
- [ ] Testar nova biblioteca react-brazil-heatmap

### Página Clientes
- [ ] Rever layout side-by-side (futuro)

---

## 📝 Notas

### Biblioteca de Mapa
- Usando `react-brazil-heatmap` com `colorRange` para colorir estados
- CE com valor 2 (cor mais escura), demais com valor 1
- cityColors não funcionou como esperado

### Certificações
- Novo layout: imagens lado a lado + descrição ISO abaixo
- Placeholders criados em `public/images/certifications/`
- Validade removida conforme solicitado

### Documento Corporativo (COORP.md)
- Contém todas as informações principais da empresa
- Seção de certificações atualizada com ISO 9001:2015 da ABNT

---

## 🚀 Próximos Passos

1. Adicionar imagens dos certificados ao diretório
2. Atualizar componente CertificationsSection com imagens reais
3. Testar funcionalidades