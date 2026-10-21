sed -i '24,28c\
  const handleSubmit = (e: React.FormEvent) => {\
    e.preventDefault();\
    \
    const phone = "5551999999999";\
    let text = `Olá! Vim pelo site e tenho interesse na *${type === "bpo" ? "Gestão Financeira (BPO)" : "Consultoria Financeira"}*.\\n\\n`;\
    text += `*Meus Dados:*\\n`;\
    text += `- Nome: ${formData.nome}\\n`;\
    text += `- Empresa: ${formData.empresa}\\n`;\
    text += `- E-mail: ${formData.email}\\n\\n`;\
    \
    if (type === "bpo") {\
      text += `*Meu Cenário:*\\n`;\
      text += `- Dificuldade: ${formData.dorPrincipal}\\n`;\
      text += `- Volume mensal: ${formData.volumeOuControle}\\n`;\
    } else {\
      text += `*Meu Cenário:*\\n`;\
      text += `- Objetivo: ${formData.dorPrincipal}\\n`;\
      text += `- Faturamento: ${formData.volumeOuControle}\\n`;\
    }\
    \
    const encodedText = encodeURIComponent(text);\
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;\
    \
    window.open(whatsappUrl, "_blank");\
    setStep(3);\
  };' src/components/LeadCaptureForm.tsx
